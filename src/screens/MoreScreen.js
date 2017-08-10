import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';

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
          <Text>
            More Screen
        </Text>
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
  }
};

export default MoreScreen;