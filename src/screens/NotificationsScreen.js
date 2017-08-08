import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NotificationsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications'
  };

  render() {
    return (
      <View>
        <Text>
          Notifications Screen
        </Text>
      </View>
    );
  }
}

export default NotificationsScreen;