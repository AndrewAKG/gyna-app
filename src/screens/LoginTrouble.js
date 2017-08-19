import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Button, CheckBox, Divider } from 'react-native-elements';
import { Input, BackgroundImage } from '../components';
import { connect } from 'react-redux';
import { forgetPassword, emailChanged } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginTrouble extends React.Component {
  static navigationOptions = {
    title: 'Login trouble',
    headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: 'Login trouble ?!',
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
          <View style={{ flex: 3, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)' }}>
            <Image
              source={require('../../assets/icons/ask.png')}
              style={imageStyle}
            />
          </View>
          <View style={{ flex: 3, alignItems: 'flex-start', backgroundColor: 'rgba(0,0,0,0)', marginHorizontal: 25 }}>
            <View style={{ flex: 2 }}>
              <Text style={{ color: 'white', marginBottom: 20, fontWeight: '500', fontSize: 18 }}>
                Having trouble logging in ?
           </Text>

              <Text style={{ color: 'white', marginBottom: 20 }}>
                Here are some problems and our recommendations for solving them :-
              </Text>

              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate('forgetPassowrd')}
                style={{
                  backfaceVisibility: 'hidden',
                  overflow: 'hidden',
                }}
              >
                <View style={{ flex: 0.5 }}>
                  <Text style={{ color: 'white', textDecorationLine: 'underline', fontSize: 16 }}>
                    If You forget your password
                 </Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate('signUp')}
                style={{
                  backfaceVisibility: 'hidden',
                  overflow: 'hidden',
                }}
              >
                <View style={{ flex: 0.5 }}>
                  <Text style={{ color: 'white', textDecorationLine: 'underline', fontSize: 16 }}>
                    You forget your email ?
                 </Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate('contactUs')}
                style={{
                  backfaceVisibility: 'hidden',
                  overflow: 'hidden',
                }}
              >
                <View style={{ flex: 0.5 }}>
                  <Text style={{ color: 'white', textDecorationLine: 'underline', fontSize: 16, marginBottom: 10 }}>
                    We didn't recognise your Email ?
                 </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
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
    marginTop: 0.025 * SCREEN_HEIGHT,
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 0.04 * SCREEN_HEIGHT
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



export default LoginTrouble;
