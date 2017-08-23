import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, Modal } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { Input, BackgroundImage, Spinner } from '../components';
import { connect } from 'react-redux';
import { forgetPassword, emailChanged, clear } from '../actions';
import { NavigationActions } from 'react-navigation';

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

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.onForgetComplete(nextProps);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onButtonPress() {
    const { email } = this.props;
    this.props.forgetPassword({ email });
  }

  onForgetComplete(props) {
    if (props.forgetPasswordSuccess === 'true' || props.loading) {
      this.setState({ modal: true });
    }
    else if (props.forgetPasswordSuccess === 'false') {
      this.setState({ modal: true });
      setTimeout(() => this.props.clear(), 3000);
    }
  }

  renderContent() {
    if (this.props.loading) {
      return (
        <View style={styles.feedbackStyle}>
          <Spinner />
        </View>
      )
    }
    else if (this.props.forgetPasswordSuccess === 'true') {
      return (
        <View style={styles.feedbackStyle}>
          <Text style={{ fontSize: 18, backgroundColor: 'transparent', color: 'white' }}>
            Instructions sent, check your email
          </Text>
        </View>
      );
    }
    else if (this.props.forgetPasswordSuccess === 'false') {
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
    return (
      <Modal
        animationType={'fade'}
        visible={this.state.modal}
        transparent={true}
        presentationStyle={'overFullScreen'}
        onShow={() => setTimeout(() => this.setState({ modal: false }), 6000)}
      >
        {this.renderContent()}
      </Modal>
    );
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

          {this.renderModal()}

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
  },
  feedbackStyle: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
};

const mapStateToProps = ({ forget }) => {
  const { email, forgetPasswordSuccess, loading, error } = forget;
  return { email, forgetPasswordSuccess, loading, error };
};

export default connect(mapStateToProps,
  {
    forgetPassword,
    emailChanged,
    clear
  })
  (ForgetPasswordScreen);