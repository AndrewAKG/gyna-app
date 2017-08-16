import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { BackgroundImage, InputMoreScreen, BirthdateInput } from '../components';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class EditProfileScreen extends Component {

  static navigationOptions = {
    title: 'editProfile',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: 'edit profile',
  };

  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      date: today,
    }
  }

  render() {
    const {
      containerStyle,
      buttonStyle,
      inputStyle,
      userNameStyle,
      emailPhoneStyle,
      dateStyle
     } = styles;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={containerStyle}
          >
            <Text style={userNameStyle}>
              Username
          </Text>
            <InputMoreScreen
              placeholder='Username'
            />
            <Text style={emailPhoneStyle}>
              E-mail
          </Text>
            <InputMoreScreen
              placeholder='E.mail'
              Type='email-address'
            />
            <Text style={emailPhoneStyle}>
              Phone
          </Text>
            <InputMoreScreen
              placeholder='Phone'
              Type='phone-pad'
            />
            <Text style={dateStyle}>
              Working Address
          </Text>
            <InputMoreScreen
              placeholder='Working Address'
            />
            <Text style={dateStyle}>
              Anniversary Date
            </Text>
            <BirthdateInput
              date={this.state.date}
              onDateChange={(date) => this.setState({ date: date })}
            />
            <Button
              onPress={() => console.log('change edit profile')}
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
    marginTop: 10
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
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 40
  },
  userNameStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16,
    marginRight: 0.47 * SCREEN_WIDTH,
    fontWeight: '500'
  },
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
    marginRight: 0.33 * SCREEN_WIDTH,
    fontWeight: '500'
  }
};

export default EditProfileScreen;