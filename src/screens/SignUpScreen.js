import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import { Input } from '../components/Input';
import { BirthdateInput } from '../components/BirthdateInput';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'signUp',
    headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: ''
  };

  render() {
    const { containerStyle } = styles;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={containerStyle}
            scrollEnabled
            bounces={false}
          >
            <Image
              source={require('../../assets/icons/18.png')}
              style={{ width: 0.9 * SCREEN_WIDTH, height: 0.22 * SCREEN_HEIGHT }}
            />
            <Input
              iconSource={require('../../assets/icons/f-doc.png')}
              placeholder='username'
              style={{ marginTop: 20 }}
            />
            <Input
              iconSource={require('../../assets/icons/locked.png')}
              placeholder='password'
              secure
            />
            <Input
              iconSource={require('../../assets/icons/email.png')}
              placeholder='E-mail'
              Type='email-address'
            />
            <Input
              iconSource={require('../../assets/icons/phone.png')}
              placeholder='Phone'
              Type='phone-pad'
            />
            <Input
              iconSource={require('../../assets/icons/13.png')}
              placeholder='Working address'
              Type='email-address'
            />
            <BirthdateInput
              iconSource={require('../../assets/icons/14.png')}
        //      placeholder='Anniversary date'
            />
          </ScrollView>
        </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 10,
    alignItems: 'center'
  }
};

export default SignUpScreen;