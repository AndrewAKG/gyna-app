import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import {
  BackgroundImage,
  AnotherIssue,
  FAQs,
  Spinner
} from '../components';
import { connect } from 'react-redux';
import {
  senderNameChanged,
  subjectChanged,
  messageChanged,
  sendIssue,
  senderEmailChanged
} from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class HelpDeskScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      issueButtonPressed: false,
      FAQsButtonPressed: true,
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
    headerTitle: 'Help Desk',
  };

  componentWillReceiveProps(nextProps) {
    this.onIssueSent(nextProps);
  }

  onIssueSent(props){
    if (props.success) {
      this.setState({onIssueButtonPressed: true})
      this.props.navigation.navigate('helpDesk');
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
            this.props.navigation.navigate('more');
          }
        }
      }
    }
    console.log(props.serverMessage);
  }

  onIssueButtonPressed() {
    console.log("d5l al method");
    this.setState({ issueButtonPressed: true, FAQsButtonPressed: false })
  }

  onFAQSButtonPressed() {
    this.setState({ issueButtonPressed: false, FAQsButtonPressed: true })
  }

  onButtonPress() {
    const { name, subject, message } = this.state;
    this.props.sendIssue({ name, subject, message })
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
    if (!this.state.issueButtonPressed || this.FAQsButtonPressed) {
      return (
        <BackgroundImage>
          <View style={{ flex: 1 }}>
            <FAQs
              onFAQSButtonPressed={() => this.onFAQSButtonPressed()}
              onIssueButtonPressed={() => this.onIssueButtonPressed()}
            />
          </View>
        </BackgroundImage>
      );
    } else {
      return (
        <BackgroundImage>
          <View style={{ flex: 1 }}>
            <AnotherIssue
              onFAQSButtonPressed={() => this.onFAQSButtonPressed()}
              onIssueButtonPressed={() => this.onIssueButtonPressed()}
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
      );
    }
  }
}

const styles = {
  icon: {
    width: 24,
    height: 24,
    marginTop: 6
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
};

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
    sendIssue
  })
  (HelpDeskScreen);