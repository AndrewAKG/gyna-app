import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions, Modal } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import {
  oldPasswordChanged,
  newPasswordChanged,
  changePassword,
  confirmPasswordChanged,
  clearPassword
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
      modal: false
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
    this.props.oldPasswordChanged(text);
  }

  onConfirmPasswordChanged(text) {
    this.props.confirmPasswordChanged(text);
  }

  renderContent() {
    if (this.props.loading) {
      return (
        <View style={styles.feedbackStyle}>
          <Spinner />
        </View>
      );
    }
    else {
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
    if (this.props.loading || this.props.success === 'false') {
      return (
        <Modal
          animationType={'fade'}
          visible={this.state.modal}
          transparent={true}
          presentationStyle={'overFullScreen'}
          onShow={() => setTimeout(() => this.setState({ modal: false }), 4000)}
        >
          {this.renderContent()}
        </Modal>
      );
    }
  }

  onChangeComplete(props) {
    if (props.success === 'true') {
      setTimeout(() => this.props.clearPassword(), 1000);
      this.props.navigation.navigate('more');
    }
    else if (props.success === 'false') {
      this.setState({ modal: true });
      setTimeout(() => this.props.clearPassword(), 4000);
    }
    else if (props.loading) {
      this.setState({ modal: true });
    }
  }

  onNewPasswordChanged(text) {
    this.props.newPasswordChanged(text);
  }

  onButtonPress() {
    const { oldPassword, newPassword, confirmPassword } = this.props;
    this.props.changePassword({ oldPassword, newPassword, confirmPassword });
  }

  render() {
    const {
      containerStyle,
      buttonStyle,
      inputStyle,
      viewStyle
     } = styles;

    return (
      <BackgroundImage>
        <View style={viewStyle}>

          <View style={{ flex: 2.5 }}>
            <InputPassword
              placeholder='Old Password'
              style={inputStyle}
              onChangeText={this.onOldPasswordChanged.bind(this)}
              value={this.props.oldPassword}

            />
          </View>
          <View style={{ flex: 2.5 }}>
            <InputPassword
              placeholder='New Password'
              style={inputStyle}
              onChangeText={this.onNewPasswordChanged.bind(this)}
              value={this.props.newPassword}
            />
          </View>
          <View style={{ flex: 2.5 }}>
            <InputPassword
              placeholder='Confirm Password'
              style={inputStyle}
              onChangeText={this.onConfirmPasswordChanged.bind(this)}
              value={this.props.confirmPassword}
              returnKeyType={"go"}
              onSubmit={(event) => {
                this.onButtonPress();
              }}
            />
          </View>
          <View style={{ flex: 2.5 }}>
            <Button
              onPress={this.onButtonPress.bind(this)}
              title="Save"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
              fontSize={0.047 * SCREEN_WIDTH}
            />
          </View>
          {this.renderModal()}
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
    height: 0.095 * SCREEN_HEIGHT,
    width: 0.8 * SCREEN_WIDTH
  },
  feedbackStyle: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 40
  }
};

const mapStateToProps = ({ changePassword }) => {
  const { success, loading, message, oldPassword, newPassword, confirmPassword, error } = changePassword;
  return { success, loading, message, oldPassword, newPassword, confirmPassword, error };

};


export default connect(mapStateToProps,
  {
    oldPasswordChanged,
    newPasswordChanged,
    changePassword,
    confirmPasswordChanged,
    clearPassword
  })
  (ChangePasswordScreen);