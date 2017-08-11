import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import BackgroundImage from '../components/BackgroundImage';
import { Input } from '../components/Input';
//import CheckBox from 'react-native-checkbox';

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
    headerTitle: '',
  };

  constructor(props) {
    super(props);
    this.state = { checked: false }
  }

  renderCheckBox() {
    if (this.state.checked === false) {
      return (
        <CheckBox
          center
          title='Remember Me'
          checkedIcon='check-square-o'
          uncheckedIcon='square-o'
          checkedColor='white'
          checked={this.state.checked}
          onIconPress={() => this.onPress()}
          containerStyle={styles.checkboxContainerStyle}
          textStyle={{ color: 'white', fontWeight: "normal",textAlign: "left",fontSize: 12 }}
        />
      );
    }
    else {
      return (
        <CheckBox
          center
          title='Remember Me'
          checkedIcon='check-square-o'
          uncheckedIcon='square-o'
          checkedColor='white'
          checked={this.state.checked}
          onIconPress={() => this.onPress()}
          containerStyle={styles.checkboxContainerStyle}
          textStyle={{ color: 'white', fontWeight: "normal",textAlign: "left",fontSize:12 }}
        />
      );
    }
  }

  onPress() {
    this.setState({ checked: !(this.state.checked) })
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={styles.containerStyle}
            scrollEnabled
            bounces={false}
          >
            <Image
              source={require('../../assets/icons/4.png')}
            // style={{ width: 0.4 * SCREEN_WIDTH }}
            />
            <Input
              iconSource={require('../../assets/icons/doc.png')}
              placeholder='username'
              style={{ marginTop: 20 }}
            />
            <Input
              iconSource={require('../../assets/icons/locked.png')}
              placeholder='password'
              secure={true}
            />
            <Button
              onPress={() => navigate('mainScreen')}
              title="login"
              buttonStyle={styles.buttonStyle}
              color='white'
              fontWeight='bold'
              textStyle={{ textDecorationLine: 'underline' }}
            />
            <View style={styles.containerViewStyle2}>
              <View style={{ flex: 5, marginLeft: 6,alignItems:"flex-start" }}>
                {this.renderCheckBox()}
              </View>
              <View style={styles.buttonViewTextStyle}>
                <Button
                  onPress={() => navigate('mainScreen')}
                  title="forger your passowrd?"
                  buttonStyle={styles.buttonStyle2}
                  color='white'
                  fontWeight='600'
                  textStyle={styles.buttonTextStyle}
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
    borderRadius: 25,
    backgroundColor: '#4891DE',
    width: 0.9 * SCREEN_WIDTH,
    height: 0.08 * SCREEN_HEIGHT,
    marginTop: 10
  },
  buttonStyle2: {
    borderRadius: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    width: 150,
    height: 100,
    marginTop: -14,
  },
  buttonTextStyle: {
    textDecorationLine: 'underline',
    fontSize: 12,
    textAlign: "left",
  },
  buttonViewTextStyle: {
    flex: 5,
    marginTop: -10,
    marginRight: 20
  },
  containerViewStyle2: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 15
  },
  checkboxContainerStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 0
  }
};
export default LoginScreen;