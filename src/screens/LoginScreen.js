import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'login'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>
          Login Screen
        </Text>
        <Button
          onPress={() => navigate('mainScreen')}
        >
          to tab screen
        </Button>
        <Button
          onPress={() => navigate('signUp')}
        >
          go to sign up
        </Button>
      </View>
    );
  }
}