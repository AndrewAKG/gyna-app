import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Linking, TouchableWithoutFeedback, ScrollView, Modal } from 'react-native';
import { Entypo, Foundation, FontAwesome } from '@expo/vector-icons';
import { BackgroundImage, MessageUs, Address, Spinner, MoreScreenButton } from '../components';
import { connect } from 'react-redux';
import {
  senderNameChanged,
  subjectChanged,
  messageChanged,
  sendMessage,
  senderEmailChanged,
  clearSuccess
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
    if (props.success === 'true') {
      setTimeout(() => this.props.clearSuccess(), 1000);
    }
    else if (props.success === 'false') {
      this.setState({ modal: true });
      setTimeout(() => this.props.clearSuccess(), 3000);
    }
    else if (props.loading) {
      this.setState({ modal: true });
    }
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
    this.props.senderNameChanged(text);
  }

  onSubjectChanged(text) {
    this.props.subjectChanged(text);
  }

  onMessageChanged(text) {
    this.props.messageChanged(text);
  }

  onEmailChanged(text) {
    this.props.senderEmailChanged(text);
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
          onRequestClose={() => { }}
        >
          {this.renderContent()}
        </Modal>
      );
    }
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
              {this.renderModal()}
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
  },
  feedbackStyle: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
}
const mapStateToProps = ({ messageSending }) => {
  const { success, loading, serverMessage, name, email, message, subject, error } = messageSending;
  return { success, loading, serverMessage, name, email, message, subject, error };
};


export default connect(mapStateToProps,
  {
    senderEmailChanged,
    senderNameChanged,
    subjectChanged,
    messageChanged,
    sendMessage,
    clearSuccess
  })
  (ContactUsScreen);