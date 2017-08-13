import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { BackgroundImage } from '../components';

class LifeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'your life',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      // setting the Tab's Icon
      <Image
        source={require('../../assets/icons/life.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };

  render() {
    return (
      <BackgroundImage>
        <View>
          <Text>
            Life Screen
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

export default LifeScreen;