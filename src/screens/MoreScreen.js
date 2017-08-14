import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { BackgroundImage } from '../components';

class MoreScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'More',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: '',
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
      <BackgroundImage />
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