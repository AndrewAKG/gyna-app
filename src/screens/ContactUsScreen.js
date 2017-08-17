import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Linking, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Entypo, Foundation, FontAwesome } from '@expo/vector-icons';
import { BackgroundImage, MessageUs, Address } from '../components';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ContactUsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messageUsButtonPressed: false,
      addressButtonPressed: true
    }
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTintColor: 'white',
    headerTitle: 'Contact Us',
  };

  onPress() {
    Linking.openURL('http://www.tabukpharmaceuticals.com/')
      .catch(err => console.error('An error occurred', err));
  }

  onMessageButtonPressed() {
    console.log("d5l al method");
    this.setState({ messageUsButtonPressed: true, addressButtonPressed: false });
    console.log(this.state.messageUsButtonPressed);
  }

  onAddressButtonPressed() {
    this.setState({ messageUsButtonPressed: false, addressButtonPressed: true })
  }

  render() {
    if (!this.state.messageUsButtonPressed || this.addressButtonPressed) {
      return (
        <BackgroundImage>
          <View style={{ flex: 1 }}>
            <Address
              onAddressButtonPressed={() => this.onAddressButtonPressed()}
              onMessageButtonPressed={() => this.onMessageButtonPressed()}
              onUrlPressed={() => this.onPress()}
            />
          </View>
        </BackgroundImage>
      );
    } else {
      return (
        <BackgroundImage>
          <View style={{ flex: 1 }}>
            <MessageUs
              onAddressButtonPressed={() => this.onAddressButtonPressed()}
              onMessageButtonPressed={() => this.onMessageButtonPressed()}
            />
          </View>
        </BackgroundImage>
      )
    }
  }
}

export default ContactUsScreen;
