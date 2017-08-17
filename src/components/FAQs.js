import React from 'react';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import {
  BackgroundImage,
  MoreScreenButton,
  InputMoreScreen,
  InputMessage,
} from '../components';
import { MaterialIcons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FAQs extends React.Component {

  render() {
    const {
        viewStyle,
      FAQSButtonStyle,
      issueButtonStyle,
       } = styles;
    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <View style={viewStyle}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <MoreScreenButton
                buttonStyle={FAQSButtonStyle}
                onPress={this.props.onFAQSButtonPressed}
                title='FAQS'
                fontSize={0.04 * SCREEN_WIDTH}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'flex-start' }}>
              <MoreScreenButton
                buttonStyle={issueButtonStyle}
                onPress={this.props.onIssueButtonPressed}
                title='Another issue'
                fontSize={0.04 * SCREEN_WIDTH}
              />
            </View>
          </View>
          <TouchableWithoutFeedback
            onPress={() => console.log('ooooo')}
            style={{
              backfaceVisibility: 'hidden',
              overflow: 'hidden'
            }}
          >
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0)', marginLeft: 0.2 * SCREEN_WIDTH, flexDirection: 'row' }}>
                <View style={{ flex: 6.5, alignItems: 'center' }}>
                  <Text style={{ color: 'white', fontSize: 0.043 * SCREEN_WIDTH, fontWeight: '400' }}>
                    Login Trouble
                </Text>
                </View>
                <View style={{ flex: 3.5, alignItems: 'flex-end', marginRight: 15, marginTop: -5 }}>
                  <MaterialIcons
                    name='navigate-next'
                    color="white"
                    size={33}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={{ flex: 8 }} />
        </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  issueButtonStyle: {
    borderRadius: 0.03 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    borderColor: 'white',
    backgroundColor: '#5C1634',
    width: 0.35 * SCREEN_WIDTH,
    height: 0.07 * SCREEN_HEIGHT,
    margin: 15
  },
  FAQSButtonStyle: {
    borderRadius: 0.03 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    width: 0.35 * SCREEN_WIDTH,
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
  }

}

export { FAQs };