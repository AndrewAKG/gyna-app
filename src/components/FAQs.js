import React from 'react';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Button, Divider } from 'react-native-elements';
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
      loginViewStyle,
      iconStyle,
      textStyle,
      divider
    } = styles;

    return (
      <View style={{ flex: 9 }}>

        <TouchableWithoutFeedback
          onPress={() => console.log('ooooo')}
          style={{
            backfaceVisibility: 'hidden',
            overflow: 'hidden',
            flex: 1
          }}
        >
          <View style={loginViewStyle}>

            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={textStyle}>
                Login Trouble
                  </Text>
            </View>

            <View style={iconStyle}>
              <MaterialIcons
                name='navigate-next'
                color="white"
                size={33}
              />
            </View>

          </View>
        </TouchableWithoutFeedback>

        <View style={{ flex: 9.7 }}>
          <Divider style={divider} />
        </View>
        
      </View>
    );
  }
}

const styles = {
  loginViewStyle: {
    flex: 0.8,
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 0.2 * SCREEN_WIDTH,
    flexDirection: 'row'
  },
  textStyle: {
    color: 'white',
    fontSize: 0.043 * SCREEN_WIDTH,
    fontWeight: '400'
  },
  iconStyle: {
    flex: 0.5,
    alignItems: 'flex-end',
    marginRight: 15,
    marginTop: -5
  },
  divider: {
    backgroundColor: 'white',
    marginHorizontal: 15
  }
}

export { FAQs };