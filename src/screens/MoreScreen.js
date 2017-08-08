import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MoreScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'More'
  };

  render() {
    return (
      <View>
        <Text>
          More Screen
        </Text>
      </View>
    );
  }
}

export default MoreScreen;