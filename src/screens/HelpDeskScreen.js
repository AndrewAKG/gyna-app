import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback, ScrollView, Modal } from 'react-native';
import {
  BackgroundImage,
  AnotherIssue,
  FAQs,
  Spinner,
  MoreScreenButton
} from '../components';
import { connect } from 'react-redux';
import {
  senderNameChanged,
  subjectChanged,
  messageChanged,
  sendIssue,
  senderEmailChanged,
  clearIssue
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

  onIssueSent(props) {
    if (props.successIssue === 'true') {
      setTimeout(() => this.props.clearIssue(), 1000);
    }
    else if (props.successIssue === 'false') {
      this.setState({ modal: true });
      setTimeout(() => this.props.clearIssue(), 3000);
    }
    else if (props.loading) {
      this.setState({ modal: true });
    }
  }

  onIssueButtonPressed() {
    console.log("d5l al method");
    this.setState({ issueButtonPressed: true })
  }

  onFAQSButtonPressed() {
    this.setState({ issueButtonPressed: false })
  }

  onButtonPress() {
    const { name, subject, message, email } = this.props;
    this.props.sendIssue({ name, subject, message, email })
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
            {this.props.errorIssue}
          </Text>
        </View>
      );
    }
  }

  renderModal() {
    if (this.props.loading || this.props.successIssue === 'false') {
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
      <View style={(!this.state.issueButtonPressed) ? styles.viewStyle : styles.viewButtonsStyle}>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <MoreScreenButton
            buttonStyle={(!this.state.issueButtonPressed) ? styles.FAQSButtonStyle : styles.issueButtonStyle}
            onPress={() => this.onFAQSButtonPressed()}
            title='FAQS'
            fontSize={0.042 * SCREEN_WIDTH}
          />
        </View>

        <View style={styles.issueButtonViewStyle}>
          <MoreScreenButton
            buttonStyle={(this.state.issueButtonPressed) ? styles.FAQSButtonStyle : styles.issueButtonStyle}
            onPress={() => this.onIssueButtonPressed()}
            title='Another issue'
            fontSize={0.042 * SCREEN_WIDTH}
          />
        </View>

      </View>
    );
  }

  render() {
    if (!this.state.issueButtonPressed) {
      return (
        <BackgroundImage>
          <View style={{ flex: 1 }}>

            {this.renderButtons()}

            <FAQs
              onFAQSButtonPressed={() => this.onFAQSButtonPressed()}
              onIssueButtonPressed={() => this.onIssueButtonPressed()}
              onButtonPress={() => this.props.navigation.navigate('trouble')}
            />

          </View>
        </BackgroundImage>
      );
    } else {
      return (
        <BackgroundImage>
          <View style={{ flex: 1 }}>

            <ScrollView
              contentContainerStyle={styles.containerStyle}
            >

              {this.renderButtons()}

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
              {this.renderModal()}

            </ScrollView>

          </View>
        </BackgroundImage>
      );
    }
  }
}

const styles = {
  containerStyle: {
    paddingTop: 10,
    alignItems: 'center'
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
  issueButtonStyle: {
    borderRadius: 0.03 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    borderColor: 'white',
    backgroundColor: '#5C1634',
    width: 0.4 * SCREEN_WIDTH,
    height: 0.07 * SCREEN_HEIGHT,
    margin: 15
  },
  FAQSButtonStyle: {
    borderRadius: 0.03 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    width: 0.4 * SCREEN_WIDTH,
    height: 0.07 * SCREEN_HEIGHT,
    margin: 15,
    backgroundColor: '#00C1FF'
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 20,
    marginBottom: 30
  },
  issueButtonViewStyle: {
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
};

const mapStateToProps = ({ messageSending }) => {
  const { successIssue, loading, serverMessage, name, email, subject, message, errorIssue } = messageSending;
  return { successIssue, loading, serverMessage, name, email, subject, message, errorIssue };
};


export default connect(mapStateToProps,
  {
    senderEmailChanged,
    senderNameChanged,
    subjectChanged,
    messageChanged,
    sendIssue,
    clearIssue
  })
  (HelpDeskScreen);