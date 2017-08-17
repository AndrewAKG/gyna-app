import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import {
  BackgroundImage,
  AnotherIssue,
  FAQs
} from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class HelpDeskScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      issueButtonPressed: false,
      FAQsButtonPressed: true
    }
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTintColor: 'white',
    headerTitle: 'Help Desk',
  };

  onIssueButtonPressed() {
    console.log("d5l al method");
    this.setState({ issueButtonPressed: true, FAQsButtonPressed: false })
  }

  onFAQSButtonPressed() {
    this.setState({ issueButtonPressed: false, FAQsButtonPressed: true })
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

export default HelpDeskScreen;