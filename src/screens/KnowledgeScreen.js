import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { BackgroundImage, SearchInput } from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class KnowledgeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Knowledge',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: 'Your Knowledge',
    tabBarIcon: ({ tintColor }) => (
      // setting the Tab's Icon
      <Image
        source={require('../../assets/icons/knowledge.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };

  render() {
    const { scrollStyle, searchContainer, inputStyle } = styles;

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
            <ScrollView />
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

export default KnowledgeScreen;