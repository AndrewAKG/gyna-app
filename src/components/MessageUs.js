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

class MessageUs extends React.Component {

  render() {
    const {
      containerStyle,
      buttonStyle,
      messageButtonStyle,
      addressButtonStyle,
      inputStyle,
      emailPhoneStyle,
      saveButtonStyle,
      viewButtonsStyle,
      inputMessageStyle,
      buttonViewStyle
     } = styles;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>

          <ScrollView
            contentContainerStyle={containerStyle}
          >
            <View style={viewButtonsStyle}>

              <View style={{ flex: 1, alignItems: 'center' }}>
                <MoreScreenButton
                  buttonStyle={messageButtonStyle}
                  onPress={this.props.onAddressButtonPressed}
                  title='Address'
                  fontSize={0.0472 * SCREEN_WIDTH}
                />
              </View>

              <View style={buttonViewStyle}>
                <MoreScreenButton
                  buttonStyle={addressButtonStyle}
                  onPress={this.props.onMessageButtonPressed}
                  title='Message us'
                  fontSize={0.0472 * SCREEN_WIDTH}
                />
              </View>

            </View>

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

            <Text style={emailPhoneStyle}>
              Subject
            </Text>
            <InputMoreScreen
              placeholder=''
              style={inputStyle}
              onChangeText={this.props.onChangeTextSubject}
              value={this.props.valueSubject}
            />

            <Text style={emailPhoneStyle}>
              Message
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
    height: 0.08 * SCREEN_HEIGHT,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 40
  },
  emailPhoneStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16,
    marginRight: 0.55 * SCREEN_WIDTH,
    fontWeight: '500'
  },
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 10,
    fontSize: 0.043 * SCREEN_WIDTH,
    lineHeight: 23,
    fontWeight: "200",
    height: 50,
    width: 0.8 * SCREEN_WIDTH
  },
  saveButtonStyle: {
    borderRadius: 0.03 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    width: 0.8 * SCREEN_WIDTH,
    height: 0.08 * SCREEN_HEIGHT,
    margin: 15,
    backgroundColor: '#00C1FF'
  },
  viewButtonsStyle: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 20
  },
  messageButtonStyle: {
    borderRadius: 0.03 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    borderColor: 'white',
    backgroundColor: '#5C1634',
    width: 0.4 * SCREEN_WIDTH,
    height: 0.07 * SCREEN_HEIGHT,
    margin: 15
  },
  addressButtonStyle: {
    borderRadius: 0.03 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    width: 0.4 * SCREEN_WIDTH,
    height: 0.07 * SCREEN_HEIGHT,
    margin: 15,
    backgroundColor: '#00C1FF'
  },
  inputMessageStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 0.043 * SCREEN_WIDTH,
    lineHeight: 3,
    fontWeight: "200",
    height: 0.2 * SCREEN_HEIGHT,
    width: 0.74 * SCREEN_WIDTH,
    margin: 10
  },
  buttonViewStyle: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 15
  }
}

export { MessageUs };