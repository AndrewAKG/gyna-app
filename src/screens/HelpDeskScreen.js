import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native';
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

  onIssueSent(props) {
    if (props.success) {
      this.setState({ onIssueButtonPressed: true })
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
    this.setState({ issueButtonPressed: true })
  }

  onFAQSButtonPressed() {
    this.setState({ issueButtonPressed: false })
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
  }
};

const mapStateToProps = ({ messageSending }) => {
  const { success, loading, serverMessage } = messageSending;
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