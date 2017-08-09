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
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingTop: 25 }}>
            <Input
              iconSource={require('../../assets/icons/12.png')}
              placeholder='username'
            />
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

export default SignUpScreen;