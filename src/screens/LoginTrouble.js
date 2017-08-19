import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { BackgroundImage } from '../components';

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
      imageViewStyle,
      dataViewStyle,
      troubleTextStyle,
      textStyle,
      recogniseStyle,
      problemsStyle
    } = styles;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>

          <View style={imageViewStyle}>
            <Image
              source={require('../../assets/icons/ask.png')}
              style={imageStyle}
            />
          </View>

          <View style={dataViewStyle}>

            <View style={{ flex: 2 }}>
              <Text style={troubleTextStyle}>
                Having trouble logging in ?
              </Text>

              <Text style={problemsStyle}>
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
                  <Text style={textStyle}>
                    You forget your password ?
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
                  <Text style={textStyle}>
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
                  <Text style={recogniseStyle}>
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
  imageViewStyle: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  dataViewStyle: {
    flex: 3,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0)',
    marginHorizontal: 25
  },
  troubleTextStyle: {
    color: 'white',
    marginBottom: 20,
    fontWeight: '500',
    fontSize: 18
  },
  textStyle: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 16
  },
  recogniseStyle: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginBottom: 10
  },
  problemsStyle: {
    color: 'white',
    marginBottom: 20
  }
}

export default LoginTrouble;
