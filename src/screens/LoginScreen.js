import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  AsyncStorage,
  Modal
} from 'react-native';
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
import { userNameChanged, passwordChanged, loginUser, clear } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      checked: false,
      modal: false
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
    headerLeft: null,
    gesturesEnabled: false
  };

  componentDidMount() {
    let keys = ['username', 'password'];
    AsyncStorage.multiGet(keys, (err, values) => {
      console.log(values);
      let username = values[0][1];
      let password = values[1][1];
      if (username && password) {
        const { checked } = this.state;
        if (username !== '' && password !== '') {
          this.props.loginUser({ username, password, checked });
        }
      }
      else {
        return;
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onPress() {
    this.setState({ checked: !(this.state.checked) })
  }

  onEmailChange(text) {
    this.props.userNameChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { username, password } = this.props;
    const { checked } = this.state;
    this.props.loginUser({ username, password, checked });
  }

  onAuthComplete(props) {
    if (props.success === 'true') {
      this.props.navigation.navigate('mainScreen');
    }
    else if (props.success === 'false') {
      this.setState({ modal: true });
      setTimeout(() => this.props.clear(), 3000);
    }
    else if (props.loading) {
      this.setState({ modal: true });
    }
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

  render() {
    const { navigate } = this.props.navigation;
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
            <Image
              source={require('../../assets/icons/4_1.png')}
              style={{ width: 0.35 * SCREEN_WIDTH, height: 0.3 * SCREEN_HEIGHT, paddingTop: 10 }}
            />

            <Input
              iconSource={require('../../assets/icons/Forms/doc.png')}
              placeholder='Username'
              style={{ marginTop: 20 }}
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.username}
              returnKeyType={"next"}
            />

            <InputPassword
              placeholder='Password'
              style={inputStyle}
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              returnKeyType={"go"}
              onSubmit={(event) => {
                this.onButtonPress();
              }}
            />

            <Button
              onPress={this.onButtonPress.bind(this)}
              title="Login"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
              fontSize={0.047 * SCREEN_WIDTH}
            />

            {this.renderModal()}

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
  },
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 0.055 * SCREEN_WIDTH,
    lineHeight: 23,
    fontWeight: '200',
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
  const { success, loading, user, username, password, error } = auth;
  return { success, loading, user, username, password, error };
};


export default connect(mapStateToProps,
  {
    userNameChanged,
    passwordChanged,
    loginUser,
    clear
  })
  (LoginScreen);