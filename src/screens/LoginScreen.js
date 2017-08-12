import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import BackgroundImage from '../components/BackgroundImage';
import { Input } from '../components/Input';
import { InputPassword } from '../components/InputPassword';
import RememberForgetPass from '../components/RememberForgetPass';
import SignUpAccount from '../components/SignUpAccount';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { checked: false }
  }

  static navigationOptions = {
    title: 'login',
    headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: '',
    headerLeft: null
  };

  onPress() {
    this.setState({ checked: !(this.state.checked) })
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      containerStyle,
      buttonStyle,
    } = styles;

    return (
      <BackgroundImage>

        <View style={{ flex: 1 }}>

          <ScrollView
            contentContainerStyle={containerStyle}
            scrollEnabled
            bounces={false}
          >
            <Image
              source={require('../../assets/icons/4_1.png')}
              style={{ width: 0.35 * SCREEN_WIDTH, height: 0.3 * SCREEN_HEIGHT, paddingTop: 10 }}
            />
            <Input
              iconSource={require('../../assets/icons/doc.png')}
              placeholder='username'
              style={{ marginTop: 20 }}
            />
            <InputPassword />
            <Button
              onPress={() => navigate('mainScreen')}
              title="Login"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
              fontSize={18}
            />

            <RememberForgetPass
              onButtonPress={() => console.log('forgetPass')}
              onCheckBoxPress={() => this.onPress()}
              checked={this.state.checked}
            />

            <SignUpAccount
              onButtonPress={() => navigate('signUp')}
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
  },
  buttonStyle: {
    borderRadius: 20,
    backgroundColor: '#00C1FF',
    width: 0.8 * SCREEN_WIDTH,
    height: 60,
    margin: 10
  },
  b2: {
    borderRadius: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    width: 150,
    height: 100,
  },
  ViewStyle2: {
    flex: 2,
    marginLeft: 20,
    marginTop: -30,
    alignItems: "flex-end"
  },
  buttonTextStyle: {
    textDecorationLine: 'underline',
    fontSize: 14,
    marginLeft: 70,
    textAlign: 'left',
    marginTop: -23,
    color: '#4169E1',
    fontWeight: "400"
  },

};

export default LoginScreen;