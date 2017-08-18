import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import {
  oldPasswordChanged,
  newPasswordChanged,
  changePassword,
  confirmPasswordChanged
} from '../actions';
import { BackgroundImage, InputPassword, Spinner } from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'changePassword' })],
});

class ChangePasswordScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTintColor: 'white',
    headerTitle: 'Change Password',
  };

  componentWillReceiveProps(nextProps) {
    this.onChangeComplete(nextProps);
  }

  onOldPasswordChanged(text) {
    this.setState({ oldPassword: text });
    this.props.oldPasswordChanged(text);
  }

  onConfirmPasswordChanged(text) {
    this.setState({ confirmPassword: text })
    this.props.confirmPasswordChanged(text);
  }

  onChangeComplete(props) {
    if (props.success) {
      this.props.navigation.navigate('login');
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
          if (props.success === false) {
            this.props.navigation.dispatch(resetAction)
          }
        }
      }
    }
    console.log(props.message);
  }

  onNewPasswordChanged(text) {
    this.setState({ newPassword: text });
    this.props.newPasswordChanged(text);
  }

  onButtonPress() {
    const { oldPassword, newPassword, confirmPassword } = this.state;
    if (newPassword === confirmPassword) {
      this.props.changePassword({ oldPassword, newPassword })
    }
  }

  render() {
    const {
      containerStyle,
      buttonStyle,
      inputStyle
     } = styles;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={containerStyle}
          >
            <InputPassword
              placeholder='Old Password'
              style={inputStyle}
              onChangeText={this.onOldPasswordChanged.bind(this)}
              value={this.props.oldPassowrd}

            />
            <InputPassword
              placeholder='New Password'
              style={inputStyle}
              onChangeText={this.onNewPasswordChanged.bind(this)}
              value={this.props.newPassword}
            />
            <InputPassword
              placeholder='Confirm Password'
              style={inputStyle}
              onChangeText={this.onConfirmPasswordChanged.bind(this)}
              value={this.props.confirmPassword}
            />
            <Button
              onPress={this.onButtonPress.bind(this)}
              title="Save"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
              fontSize={0.047 * SCREEN_WIDTH}
            />

          </ScrollView>
        </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 35
  },
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
  buttonStyle: {
    borderRadius: 0.05 * SCREEN_HEIGHT,
    backgroundColor: '#00C1FF',
    width: 0.8 * SCREEN_WIDTH,
    height: 0.095 * SCREEN_HEIGHT,
    margin: 10
  },
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 0.047 * SCREEN_WIDTH,
    lineHeight: 23,
    fontWeight: "200",
    height:  0.095 * SCREEN_HEIGHT,
    width:  0.8 * SCREEN_WIDTH
  },
};

const mapStateToProps = ({ changePassword }) => {
  const { success, loading, message } = changePassword;
  return { success, loading, message };
};


export default connect(mapStateToProps,
  {
    oldPasswordChanged,
    newPasswordChanged,
    changePassword,
    confirmPasswordChanged
  })
  (ChangePasswordScreen);