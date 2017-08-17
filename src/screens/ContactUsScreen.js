import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Linking, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Entypo, Foundation, FontAwesome } from '@expo/vector-icons';
import { BackgroundImage, MessageUs, Address, Spinner } from '../components';
import { connect } from 'react-redux';
import {
  senderNameChanged,
  subjectChanged,
  messageChanged,
  sendMessage,
  senderEmailChanged
} from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ContactUsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messageUsButtonPressed: false,
      name: '',
      subject: '',
      message: '',
      email: ''
    }
  }


  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTintColor: 'white',
    headerTitle: 'Contact Us',
  };

  componentWillReceiveProps(nextProps) {
    this.onMessageSent(nextProps);
  }

  onMessageSent(props) {
    if (props.success) {
      this.setState({ onMessageButtonPressed: true })
      this.props.navigation.navigate('contactUs');
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
          if (props.success === false) {
            this.props.navigation.navigate('login');
          }
        }
      }
    }
    console.log(props.serverMessage);
  }

  onPress() {
    Linking.openURL('http://www.tabukpharmaceuticals.com/')
      .catch(err => console.error('An error occurred', err));
  }

  onMessageButtonPressed() {
    console.log("d5l al method");
    this.setState({ messageUsButtonPressed: true });
    console.log(this.state.messageUsButtonPressed);
  }

  onAddressButtonPressed() {
    this.setState({ messageUsButtonPressed: false });
  }

  onButtonPress() {
    const { name, subject, message } = this.state;
    this.props.sendMessage({ name, subject, message })
  }

  onNameChanged(text) {
    this.setState({ name: text });
    this.props.senderNameChanged(text);
  }

  onSubjectChanged(text) {
    this.setState({ subject: text });
    this.props.subjectChanged(text);
  }

  onMessageChanged(text) {
    this.setState({ message: text });
    this.props.messageChanged(text);
  }

  onEmailChanged(text) {
    this.setState({ email: text });
    this.props.senderEmailChanged(text);
  }

  render() {
    if (!this.state.messageUsButtonPressed) {
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
              onButtonPress={() => this.onButtonPress()}
              onChangeTextName={this.onNameChanged.bind(this)}
              valueName={this.props.name}
              onChangeTextEmail={this.onEmailChanged.bind(this)}
              valueEmail={this.props.email}
              onChangeTextSubject={this.onSubjectChanged.bind(this)}
              valueSubject={this.props.subject}
              onChangeTextMessage={this.onMessageChanged.bind(this)}
              valueMessage={this.props.message}
            />
          </View>
        </BackgroundImage>
      )
    }
  }
}

const mapStateToProps = ({ message }) => {
  const { success, loading, serverMessage } = message;
  return { success, loading, serverMessage };
};


export default connect(mapStateToProps,
  {
    senderEmailChanged,
    senderNameChanged,
    subjectChanged,
    messageChanged,
    sendMessage
  })
  (ContactUsScreen);