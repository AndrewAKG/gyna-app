import React, { Component } from 'react';
import { View, Text } from 'react-native';

class KnowledgeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Knowledge'
  };

  render() {
    return (
      <View>
        <Text>
          Knowledge Screen
        </Text>
      </View>
    );
  }
}

export default KnowledgeScreen;