import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import BackgroundImage from '../components/BackgroundImage';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'login',
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BackgroundImage>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button
            onPress={() => navigate('mainScreen')}
            title="to tab Screen"
          />
          <Button

            onPress={() => navigate('signUp')}
            title="sign up"
          />
        </View>
      </BackgroundImage>
    );
  }
}

export default LoginScreen;