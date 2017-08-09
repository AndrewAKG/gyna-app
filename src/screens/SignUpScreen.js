import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import { Input } from '../components/Input';

class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'signUp'
  };

  render() {
    return (
      <BackgroundImage>
          <Input
            onChangeText={() => { }}
            placeholder="username"
          />
          <Input
            secure
            placeholder="password"
            onChangeText={() => { }}
          />
      </BackgroundImage>
    );
  }
}

export default SignUpScreen;