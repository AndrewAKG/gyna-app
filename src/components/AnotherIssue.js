import React from 'react';
import { View, Dimensions, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import {
  BackgroundImage,
  MoreScreenButton,
  InputMoreScreen,
  InputMessage,
} from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class AnotherIssue extends React.Component {

  render() {
    const {
      inputStyle,
      emailPhoneStyle,
      saveButtonStyle,
      viewButtonsStyle,
      dateStyle,
      inputMessageStyle,
     } = styles;

    return (

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={emailPhoneStyle}>
          Name
            </Text>
        <InputMoreScreen
          placeholder=''
          style={inputStyle}
          onChangeText={this.props.onChangeTextName}
          value={this.props.valueName}
        />

        <Text style={emailPhoneStyle}>
          E-mail
            </Text>
        <InputMoreScreen
          placeholder=''
          Type='email-address'
          style={inputStyle}
          onChangeText={this.props.onChangeTextEmail}
          value={this.props.valueEmail}
        />

        <Text style={dateStyle}>
          Issue title
            </Text>
        <InputMoreScreen
          placeholder=''
          style={inputStyle}
          onChangeText={this.props.onChangeTextSubject}
          value={this.props.valueSubject}
        />

        <Text style={dateStyle}>
          Description
            </Text>
        <InputMessage
          placeholder=''
          style={inputMessageStyle}
          onChangeText={this.props.onChangeTextMessage}
          value={this.props.valueMessage}
        />

        <MoreScreenButton
          buttonStyle={saveButtonStyle}
          onPress={this.props.onButtonPress}
          title='Send'
          fontSize={0.04 * SCREEN_WIDTH}
        />

      </View>
    );

  }
}

const styles = {
  emailPhoneStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16,
    marginRight: 0.55 * SCREEN_WIDTH,
    fontWeight: '500'
  },
  dateStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16,
    marginRight: 0.5 * SCREEN_WIDTH,
    fontWeight: '500'
  },
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    marginLeft: 10,
    fontSize: 0.043 * SCREEN_WIDTH,
    lineHeight: 23,
    fontWeight: "200",
    height: 50,
    width: 0.8 * SCREEN_WIDTH
  },
  inputMessageStyle: {
    color: 'white',
    paddingRight: 5,
    marginLeft: 10,
    fontSize: 0.043 * SCREEN_WIDTH,
    lineHeight: 23,
    fontWeight: "200",
    height: 0.2 * SCREEN_HEIGHT,
    width: 0.8 * SCREEN_WIDTH
  },
  saveButtonStyle: {
    borderRadius: 0.03 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    width: 0.8 * SCREEN_WIDTH,
    height: 0.08 * SCREEN_HEIGHT,
    margin: 15,
    backgroundColor: '#00C1FF'
  }

}

export { AnotherIssue };