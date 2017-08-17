import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { BackgroundImage, SearchInput } from '../components';
import ListItem from '../components/ListItem';
import LifeData from '../LifeData.json';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LifeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Your Life',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerTitle: 'Your Life',
    tabBarIcon: ({ tintColor }) => (
      // setting the Tab's Icon
      <Image
        source={require('../../assets/icons/Tabs/life.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };

  render() {
    const { scrollStyle, searchContainer, inputStyle } = styles;
    const { navigate } = this.props.navigation;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <SearchInput
              placeholder="Search"
              iconSource={require('../../assets/icons/search.png')}
              onIconPress={() => console.log('ICON PRESSED')}
            //    value={this.props.value}
            //     onChangeText={() => console.log()}
            />
          </View>
          <View style={scrollStyle}>
            <ScrollView>
              <FlatList
                data={LifeData}
                numColumns={3}
                renderItem={({ item }) =>
                  <ListItem
                    title={item.title}
                    iconType={item.key}
                    onPress={() => navigate('dataList', { category: item.category, title: item.title })}
                  />
                }
              />
            </ScrollView>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  scrollStyle: {
    flex: 9
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 6
  }
};

export default LifeScreen;