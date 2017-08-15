import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, AsyncStorage } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import {
  Input,
  BackgroundImage,
  InputPassword,
  RememberForgetPass,
  SignUpAccount,
  Spinner
} from '../components';
import { emailChanged, passwordChanged, loginUser } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'login' })],
});

const backAction = NavigationActions.back({
  key: 'login'
})

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      email: '',
      password: '',
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

  /*
    ComponentWillMount() {
      AsyncStorage.getItem('email').then((email) => {
        if (email !== null) {
          this.setState({ email });
          AsyncStorage.getItem('password').then((password) => {
            if (password !== null) {
              this.setState({ password });
            }
          })
        }
        else {
          return;
        }
      })
    }
  
    ComponentDidMount() {
      const { email, password, checked } = this.state;
      if (email !== null && password !== null) {
        this.props.LoginUser({ email, password, checked });
        this.props.navigation.navigate('mainScreen');
      }
      return;
    }
  */

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onPress() {
    this.setState({ checked: !(this.state.checked) })
  }

  onEmailChange(text) {
    this.setState({ email: text });
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.setState({ password: text });
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password, checked } = this.state;
    this.props.loginUser({ email, password, checked })
  }

  onAuthComplete(props) {
   /* if (props.success) {
      this.props.navigation.navigate('mainScreen');
    }
    else {
      if (props.loading) {
        return <Spinner />
      }
      else {
        if (props.loading === false) {
          return <View />
        }
        else {
          this.props.navigation.navigate('login');
        }
      }
    }*/
    if(props.success){
      this.props.navigation.navigate('mainScreen'); 
    }
    else{
      this.props.navigation.dispatch(resetAction)      
    }
  }

  renderSpinner() {
    if (this.props.loading) {
      return <Spinner />
    }
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
              iconSource={require('../../assets/icons/Forms/doc.png')}
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
              onPress={this.onButtonPress.bind(this)}
              title="Login"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
              fontSize={0.047 * SCREEN_WIDTH}
            />

            {this.renderSpinner()}

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
  const { success } = auth;
  //  console.log(email);
  return { success };
};


export default connect(mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser
  })
  (LoginScreen);