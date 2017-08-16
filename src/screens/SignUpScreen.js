import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Input,
  BirthdateInput,
  InputPassword,
  BackgroundImage
} from '../components';

import {
  emailChanged,
  passwordChanged,
  userNameChanged,
  addressChanged,
  phoneChanged,
  dateChanged,
  nameChanged,
  signUpUser
} from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class SignUpScreen extends Component {

  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      date: today,
      email: '',
      password: '',
      username: '',
      workingAddress: '',
      phone: '',
      anniversaryDate: '',
      name: ''
    }
  }

  static navigationOptions = {
    title: 'signUp',
    headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: ''
  };

  onEmailChange(text) {
    this.setState({ email: text });
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.setState({ password: text });
    this.props.passwordChanged(text);
  }

  onNameChange(text) {
    this.setState({ name: text });
    this.props.nameChanged(text);
  }

  onAddressChange(text) {
    this.setState({ workingAddress: text });
    this.props.addressChanged(text);
  }

  onPhoneChange(text) {
    this.setState({ phone: text });
    this.props.phoneChanged(text);
  }

  onDateChange(text) {
    this.props.dateChanged(this.state.date);
  }
  onUserNameChange(text) {
    this.setState({ username: text });
    this.props.userNameChanged(text);
  }

  onButtonPress() {
    const { username, password, email, phone, workingAddress, anniversaryDate, name } = this.state;
    console.log(this.state.date);
    this.props.signUpUser({ username, password, email, phone, workingAddress, anniversaryDate, name });
    this.props.navigation.navigate('login');
  }

  render() {
    const { navigate } = this.props.navigation;
    const { containerStyle, inputStyle } = styles;

    return (
      <BackgroundImage>

        <View style={{ flex: 1 }}>

          <ScrollView
            contentContainerStyle={containerStyle}
          >
            <Image
              source={require('../../assets/icons/18.png')}
              style={{ width: 0.9 * SCREEN_WIDTH, height: 0.22 * SCREEN_HEIGHT }}
            />
            <Input
              iconSource={require('../../assets/icons/Forms/doc.png')}
              placeholder='Username'
              style={{ marginTop: 20 }}
              onChangeText={this.onUserNameChange.bind(this)}
              value={this.props.username}
            />

            <Input
              iconSource={require('../../assets/icons/Forms/doc.png')}
              placeholder='Name'
              onChangeText={this.onNameChange.bind(this)}
              value={this.props.name}
            />

            <InputPassword
              placeholder='Password'
              style={inputStyle}
              onChange={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />

            <Input
              iconSource={require('../../assets/icons/Forms/email.png')}
              placeholder='E-mail'
              Type='email-address'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
            <Input
              iconSource={require('../../assets/icons/Forms/phone.png')}
              placeholder='Phone'
              Type='phone-pad'
              onChangeText={this.onPhoneChange.bind(this)}
              value={this.props.phone}
            />
            <Input
              iconSource={require('../../assets/icons/Forms/13.png')}
              placeholder='Working address'
              onChangeText={this.onAddressChange.bind(this)}
              value={this.props.workingAddress}
            />

            <BirthdateInput
              date={this.state.date}
              onDateChange={(date) => this.setState({ date: date })}

            />

            <View style={{ margin: 10 }}>

              <Button
                onPress={this.onButtonPress.bind(this)}
                title="Register"
                buttonStyle={styles.buttonStyle}
                color='white'
                fontWeight='bold'
                fontSize={0.047 * SCREEN_WIDTH}
                containerViewStyle={{ margin: 10 }}
              />
            </View>
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
    height: 0.095 * SCREEN_HEIGHT,
    backgroundColor: '#00C1FF',
    width: 0.8 * SCREEN_WIDTH,
    margin: 10
  },
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 0.055 * SCREEN_WIDTH,
    lineHeight: 23,
    fontWeight: "200",
    height: 50
  },
};

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, name, username, workingAddress, anniversaryDate, phone } = auth;
  return { email, password, loading, name, username, workingAddress, anniversaryDate, phone };
};

export default connect(mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    userNameChanged,
    addressChanged,
    phoneChanged,
    dateChanged,
    nameChanged,
    signUpUser
  })
  (SignUpScreen);
