import React, { Component } from 'react';
import { View, Text,Image,FlatList } from 'react-native';
import { BackgroundImage } from '../components';

class MoreScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'More',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      // setting the Tab's Icon
      <Image
        source={require('../../assets/icons/more.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };

  render() {
    return (
      <BackgroundImage>
        <View>
         <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>
          }
            horizontal={false}
            numColumns={ 3 }
            columnWrapperStyle={{ backgroundColor: 'rgba(0,0,0,0)'}}
        />
        </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  icon: {
    width: 24,
    height: 24,
    marginTop: 6
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
};

export default MoreScreen;