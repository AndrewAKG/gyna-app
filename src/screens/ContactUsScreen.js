import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Linking, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Entypo, Foundation, FontAwesome } from '@expo/vector-icons';
import { BackgroundImage, MessageUs, Address, Spinner, MoreScreenButton } from '../components';
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
      //  this.props.navigation.navigate('contactUs');
    }
    else if (props.loading) {
      return <Spinner />;
    }
    else if (!props.loading) {
      return <View />;
    }
    else if (!props.success) {
      this.props.navigation.navigate('login');
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
    const { name, subject, message, email } = this.props;
    this.props.sendMessage({ name, subject, message, email })
  }

  onNameChanged(text) {
    // this.setState({ name: text });
    this.props.senderNameChanged(text);
  }

  onSubjectChanged(text) {
    //this.setState({ subject: text });
    this.props.subjectChanged(text);
  }

  onMessageChanged(text) {
    //this.setState({ message: text });
    this.props.messageChanged(text);
  }

  onEmailChanged(text) {
    //this.setState({ email: text });
    this.props.senderEmailChanged(text);
  }

  renderButtons() {

    return (
      <View style={
        (!this.state.messageUsButtonPressed) ?
          styles.viewStyle : styles.viewButtonsStyle
      }
      >

        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <MoreScreenButton
            buttonStyle={
              (!this.state.messageUsButtonPressed) ?
                styles.addressButtonStyle : styles.messageButtonStyle
            }
            onPress={() => this.onAddressButtonPressed()}
            title='Address'
            fontSize={0.042 * SCREEN_WIDTH}
          />
        </View>

        <View style={styles.messageButtonViewStyle}>
          <MoreScreenButton
            buttonStyle={
              (this.state.messageUsButtonPressed) ?
                styles.addressButtonStyle : styles.messageButtonStyle
            }
            onPress={() => this.onMessageButtonPressed()}
            title='Message Us'
            fontSize={0.042 * SCREEN_WIDTH}
          />
        </View>

      </View>
    );
  }

  render() {
    if (!this.state.messageUsButtonPressed) {
      return (
        <BackgroundImage>
          <View style={{ flex: 1 }}>

            {this.renderButtons()}

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

            <ScrollView
              contentContainerStyle={{ paddingTop: 10, alignItems: 'center' }}
            >

              {this.renderButtons()}

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

            </ScrollView>

          </View>
        </BackgroundImage>
      )
    }
  }
}

const styles = {
  viewStyle: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    marginVertical: 20
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
  messageButtonViewStyle: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 15
  },
  viewButtonsStyle: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 20
  }
}
const mapStateToProps = ({ messageSending }) => {
  const { success, loading, serverMessage, name, email, message, subject } = messageSending;
  return { success, loading, serverMessage, name, email, message, subject };
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