import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { Input, BackgroundImage, Spinner } from '../components';
import { connect } from 'react-redux';
import { forgetPassword, emailChanged } from '../actions';
import { NavigationActions } from 'react-navigation';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'login' })],
});


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

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
  }

  onEmailChange(text) {
    this.setState({ email: text });
    this.props.emailChanged(text);
  }

  onButtonPress() {
    const { email } = this.state;
    console.log(this.state.email + 'email');
    this.props.forgetPassword({ email });
  }

  componentWillReceiveProps(nextProps) {
    this.onProcessComplete(nextProps);
  }
  onProcessComplete(props) {
    if (props.forgetPasswordSucess) {
      this.props.navigation.dispatch(resetAction)
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
          if (props.forgetPasswordSucess === false) {
            this.props.navigation.navigate('forgetPassword');
          }
        }
      }
    }
  }

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
              iconSource={require('../../assets/icons/Forms/email.png')}
              placeholder='E-mail Address'
              Type='email-address'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />

            <Button
              onPress={this.onButtonPress.bind(this)}
              title="Send Instructions"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='normal'
              fontSize={18}
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

const mapStateToProps = ({ forget }) => {
  const { email, forgetPasswordSucess, loading } = forget;
  return { email, forgetPasswordSucess, loading };
};

export default connect(mapStateToProps,
  {
    forgetPassword,
    emailChanged
  })
  (ForgetPasswordScreen);