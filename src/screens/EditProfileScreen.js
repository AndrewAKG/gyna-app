import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { BackgroundImage } from '../components';

class EditProfileScreen extends Component {
    
  static navigationOptions = {
    title: 'editProfile',
    headerLeft: null,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: 'edit profile',
  };

  render() {
    return (
      <BackgroundImage
       />
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

export default EditProfileScreen;