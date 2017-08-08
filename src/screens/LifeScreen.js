import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LifeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Life'
  };

  render() {
    return (
      <View>
        <Text>
          Life Screen
        </Text>
      </View>
    );
  }
}

export default LifeScreen;