import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {
  Input,
  BirthdateInput,
  InputPassword,
  BackgroundImage,
  Spinner
} from '../components';

import {
  emailChanged,
  passwordChanged,
  userNameChanged,
  phoneChanged,
  dateChanged,
  nameChanged,
  addressChanged,
  signUpUser,
  clear
} from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class SignUpScreen extends Component {

  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      date: today,
      modal: false
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

  componentWillMount() {
    this.props.clear();
  }

  componentWillReceiveProps(nextProps) {
    this.onSignUpComplete(nextProps);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onNameChange(text) {
    this.props.nameChanged(text);
  }

  onPhoneChange(text) {
    this.props.phoneChanged(text);
  }

  onAddressChange(text) {
    this.props.addressChanged(text);
  }

  onDateChange(text) {
    this.props.dateChanged(this.state.date);
  }

  onUserNameChange(text) {
    this.props.userNameChanged(text);
  }

  onSignUpComplete(props) {
    if (props.signUpSuccess === 'true') {
      this.props.navigation.navigate('mainScreen');
    }
    else if (props.signUpSuccess === 'false') {
      this.setState({ modal: true });
      setTimeout(() => this.props.clear(), 3000);
    }
    else if (props.loading) {
      this.setState({ modal: true });
    }
  }

  onButtonPress() {
    const { username, password, email, phone, address, name } = this.props;
    const { anniversaryDate } = this.state;
    this.props.signUpUser({ username, password, email, phone, address, anniversaryDate, name });
  }

  renderContent() {
    if (this.props.loading) {
      return (
        <View style={styles.feedbackStyle}>
          <Spinner />
        </View>
      )
    }
    else if (this.props.signUpSuccess === 'false') {
      return (
        <View style={styles.feedbackStyle}>
          <Text style={{ fontSize: 18, backgroundColor: 'transparent', color: 'white' }}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderModal() {
    if (this.props.loading || this.props.signUpSuccess === 'false') {
      return (
        <Modal
          animationType={'fade'}
          visible={this.state.modal}
          transparent={true}
          presentationStyle={'overFullScreen'}
          onShow={() => setTimeout(() => this.setState({ modal: false }), 4000)}
          onRequestClose={() => { }}
        >
          {this.renderContent()}
        </Modal>
      );
    }
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
              placeholder='Name'
              style={{ marginTop: 20 }}
              onChangeText={this.onNameChange.bind(this)}
              value={this.props.name}
            />

            <Input
              iconSource={require('../../assets/icons/Forms/doc.png')}
              placeholder='Username'
              onChangeText={this.onUserNameChange.bind(this)}
              value={this.props.username}
            />

            <InputPassword
              placeholder='Password'
              style={inputStyle}
              onChangeText={this.onPasswordChange.bind(this)}
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
              value={this.props.address}
            />

            <BirthdateInput
              inputStyle={{ height: 0.08 * SCREEN_HEIGHT }}
              date={this.state.date}
              onDateChange={(date) => this.setState({ date: date })}
              show={true}
            />

            {this.renderModal()}

            <Button
              onPress={this.onButtonPress.bind(this)}
              title="Register"
              buttonStyle={styles.buttonStyle}
              color='white'
              fontWeight='bold'
              fontSize={0.047 * SCREEN_WIDTH}
              containerViewStyle={{ margin: 10 }}
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
    height: 0.095 * SCREEN_HEIGHT,
    backgroundColor: '#00C1FF',
    width: 0.8 * SCREEN_WIDTH,
    margin: 10,
    marginTop: 30
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
  feedbackStyle: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
};

const mapStateToProps = ({ auth }) => {
  const {
    email,
    password,
    loading,
    name,
    username,
    error,
    phone,
    address,
    signUpSuccess
  } = auth;

  return { email, password, loading, address, name, username, error, phone, signUpSuccess };
};

export default connect(mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    userNameChanged,
    phoneChanged,
    dateChanged,
    nameChanged,
    addressChanged,
    signUpUser,
    clear
  })
  (SignUpScreen);
