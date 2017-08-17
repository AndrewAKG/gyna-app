import React from 'react';
import { View, Text, Image, Dimensions, Linking, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Entypo, Foundation, FontAwesome } from '@expo/vector-icons';
import {
  BackgroundImage,
  MoreScreenButton,
  InputMoreScreen,
  InputMessage,
} from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Address extends React.Component {

  render() {
    const {
      buttonStyle,
      viewStyle,
      messageButtonStyle,
      addressButtonStyle,
      locationImageStyle,
      viewTextStyle,
      textStyle,
      telephoneFaxStyle,
      networkImageStyle,
      locationTextStyle,
      messageButtonViewStyle
     } = styles;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>

          <View style={viewStyle}>

            <View style={{ flex: 1, alignItems: 'center' }}>
              <MoreScreenButton
                buttonStyle={addressButtonStyle}
                onPress={this.props.onAddressButtonPressed}
                title='Address'
                fontSize={0.0472 * SCREEN_WIDTH}
              />
            </View>

            <View style={messageButtonViewStyle}>
              <MoreScreenButton
                buttonStyle={messageButtonStyle}
                onPress={this.props.onMessageButtonPressed}
                title='Message us'
                fontSize={0.0472 * SCREEN_WIDTH}
              />
            </View>

          </View>

          <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>

            <View style={locationImageStyle}>
              <Entypo
                name='location-pin'
                color="white"
                size={33}
              />
            </View>

            <View style={viewTextStyle}>
              <Text style={locationTextStyle}>
                Tabuk Pharmaceuticals Manufacturing Co. P.O. Box 28170, Riyadh 11437, KSA
              </Text>
            </View>

          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>

            <View style={telephoneFaxStyle}>
              <Foundation
                name='telephone'
                color="white"
                size={33}
              />
            </View>

            <View style={viewTextStyle}>
              <Text style={textStyle}>
                011 47 749 46
              </Text>
            </View>

          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>

            <View style={telephoneFaxStyle}>
              <FontAwesome
                name='fax'
                color="white"
                size={33}
              />
            </View>

            <View style={viewTextStyle}>
              <Text style={textStyle}>
                011 47 836 86
              </Text>
            </View>

          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>

            <View style={networkImageStyle}>
              <Entypo
                name='network'
                color="white"
                size={33}
              />
            </View>

            <TouchableWithoutFeedback
              onPress={this.props.onUrlPressed}
              style={{
                backfaceVisibility: 'hidden',
                overflow: 'hidden'
              }}
            >
              <View style={viewTextStyle}>
                <Text style={textStyle}>
                  www.tabukpharmaceuticals.com
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={{ flex: 4.5 }} />

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
  locationImageStyle: {
    alignItems: 'center',
    flex: 1.5,
    backgroundColor: 'rgba(0,0,0,0)',
    marginHorizontal: 15
  },
  viewTextStyle: {
    alignItems: 'flex-start',
    flex: 8.5,
    backgroundColor: 'rgba(0,0,0,0)',
    marginRight: 15
  },
  textStyle: {
    color: 'white',
    fontSize: 0.04 * SCREEN_WIDTH,
    textDecorationLine: 'underline'
  },
  locationTextStyle: {
    color: 'white',
    fontSize: 0.037 * SCREEN_WIDTH,
    textDecorationLine: 'underline'
  },
  telephoneFaxStyle: {
    alignItems: 'center',
    flex: 1.5,
    backgroundColor: 'rgba(0,0,0,0)',
    marginHorizontal: 15,
    marginTop: -10
  },
  networkImageStyle: {
    alignItems: 'center',
    flex: 1.5,
    backgroundColor: 'rgba(0,0,0,0)',
    marginHorizontal: 15,
    marginTop: -5
  },
  messageButtonViewStyle: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 15
  }
};

export { Address };