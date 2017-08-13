import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { Input, BackgroundImage } from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ForgetPasswordScreen extends React.Component {
  static navigationOptions = {
    title: 'forgetPassword',
    headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: '',
  };

  render() {
    const { navigate } = this.props.navigation;
    const {
      imageStyle,
      buttonStyle,
      containerStyle
    } = styles;

    return (
      <BackgroundImage>

        <View style={{ flex: 1 }}>

          <Image
            source={require('../../assets/icons/4_1.png')}
            style={imageStyle}
          />

          <View style={containerStyle}>
            <Input
              iconSource={require('../../assets/icons/email.png')}
              placeholder='E-mail Address'
              Type='email-address'
            />

            <Button
              onPress={() => navigate('mainScreen')}
              title="Send Instructions"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='normal'
              fontSize={16}
            />
          </View>

        </View>

      </BackgroundImage>
    );
  }
}

const styles = {
  imageStyle: {
    width: 0.35 * SCREEN_WIDTH,
    height: 0.3 * SCREEN_HEIGHT,
    marginTop: 0.1 * SCREEN_HEIGHT,
    marginLeft: 0.31 * SCREEN_WIDTH
  },
  buttonStyle: {
    borderRadius: 0.05 * SCREEN_HEIGHT,
    backgroundColor: '#00C1FF',
    width: 0.8 * SCREEN_WIDTH,
    height: 0.095 * SCREEN_HEIGHT,
    margin: 10
  },
  containerStyle: {
    marginTop: 0.15 * SCREEN_HEIGHT,
    alignItems: 'center'
  }
}

export default ForgetPasswordScreen;