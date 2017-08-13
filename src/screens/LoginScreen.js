import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import BackgroundImage from '../components/BackgroundImage';
import { Input } from '../components/Input';
import { InputPassword } from '../components/InputPassword';
import RememberForgetPass from '../components/RememberForgetPass';
import SignUpAccount from '../components/SignUpAccount';
import { emailChanged, passwordChanged, LoginUser } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
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

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.LoginUser({ email, password });
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      containerStyle,
      buttonStyle
    } = styles;

    return (
      <BackgroundImage>

        <View style={{ flex: 1 }}>

          <ScrollView
            contentContainerStyle={containerStyle}
          >
            <Image
              source={require('../../assets/icons/4_1.png')}
              style={{ width: 0.35 * SCREEN_WIDTH, height: 0.3 * SCREEN_HEIGHT, paddingTop: 10 }}
            />
            <Input
              iconSource={require('../../assets/icons/doc.png')}
              placeholder='Username'
              style={{ marginTop: 20 }}
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />

            <InputPassword
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />

            <Button
              onPress={() => this.onButtonPress()}
              title="Login"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
              fontSize={0.047 * SCREEN_WIDTH}
            />

            <RememberForgetPass
              onButtonPress={() => navigate('forgetPassowrd')}
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
    borderRadius: 0.05 * SCREEN_HEIGHT,
    backgroundColor: '#00C1FF',
    width: 0.8 * SCREEN_WIDTH,
    height: 0.095 * SCREEN_HEIGHT,
    margin: 10
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth;

  return { email, password };
};


export default connect(mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    LoginUser
  })
  (LoginScreen);