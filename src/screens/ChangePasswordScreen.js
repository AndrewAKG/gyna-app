import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { BackgroundImage } from '../components';

class ChangePasswordScreen extends Component {
    
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTintColor: 'white',
    headerTitle: 'Change Password',
  };

  render() {
    return (
      <BackgroundImage />
    );
  }
}

const styles = {
  icon: {
    width: 24,
    height: 24,
    marginTop: 6
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
};

export default ChangePasswordScreen;