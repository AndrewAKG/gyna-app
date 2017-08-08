import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'welcome'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>
          Welcome Screen
        </Text>
        <Button
          onPress={() => navigate('login')}
          title = "Next"
        />
      </View>
    );
  }
}

export default WelcomeScreen;