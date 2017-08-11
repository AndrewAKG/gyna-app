import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import BackgroundImage from '../components/BackgroundImage';
import { Input } from '../components/Input';
import { InputPassword } from '../components/InputPassword';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginScreen extends Component {

  static navigationOptions = {
    title: 'login',
    headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: ''
  };

  constructor(props) {
    super(props);
    this.state = { checked: false }
  }

  renderCheckBox() {
    return (
      <CheckBox
        center
        title='Remember Me'
        checkedIcon='check-square-o'
        uncheckedIcon='square-o'
        checkedColor='white'
        checked={this.state.checked}
        onIconPress={() => this.onPress()}
        containerStyle={styles.checkboxStyle}
        textStyle={{ color: 'white', fontWeight: "normal", textAlign: "left", fontSize: 12 }}
      />
    );
  }

  onPress() {
    this.setState({ checked: !(this.state.checked) })
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      containerStyle,
      checkboxContainerStyle,
      CheckBoxViewStyle,
      buttonStyle,
      buttonTextStyle,
      forgetPasswordViewStyle,
      forgerPasswordButtonStyle
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

            <View style={CheckBoxViewStyle}>

              <View style={checkboxContainerStyle}>
                {this.renderCheckBox()}
              </View>

              <View style={forgetPasswordViewStyle}>
                <Button
                  onPress={() => navigate('signUp')}
                  title="forget your password?"
                  buttonStyle={forgerPasswordButtonStyle}
                  color='white'
                  fontWeight='600'
                  textStyle={buttonTextStyle}
                />
              </View>

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
    borderRadius: 20,
    backgroundColor: '#00C1FF',
    width: 0.8 * SCREEN_WIDTH,
    height: 60,
    margin: 10
  },
  forgerPasswordButtonStyle: {
    borderRadius: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    width: 150,
    height: 100,
    marginTop: -14,
  },
  buttonTextStyle: {
    textDecorationLine: 'underline',
    fontSize: 12,
    textAlign: 'left',
  },
  forgetPasswordViewStyle: {
    flex: 5,
    marginTop: -10,
    marginRight: 20
  },
  CheckBoxViewStyle: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 15
  },
  checkboxContainerStyle: {
    flex: 5,
    marginLeft: 6,
    alignItems: 'flex-start'
  },
  checkboxStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 0
  }
};

export default LoginScreen;