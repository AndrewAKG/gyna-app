import React from 'react';
import { View, Image, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ListItem extends React.PureComponent {

  render() {
    const { containerStyle, textContainer, textStyle, iconContainer, iconStyle } = styles;
    let iconPath;

    switch (this.props.iconType) {
      case 1:
        iconPath = require('../../assets/icons/Knowledge/21.png'); break;
      case 2:
        iconPath = require('../../assets/icons/Knowledge/22.png'); break;
      case 3:
        iconPath = require('../../assets/icons/Knowledge/23.png'); break;
      case 4:
        iconPath = require('../../assets/icons/Knowledge/24.png'); break;
      case 5:
        iconPath = require('../../assets/icons/Knowledge/25.png'); break;
      case 6:
        iconPath = require('../../assets/icons/Knowledge/26.png'); break;
      case 7:
        iconPath = require('../../assets/icons/Knowledge/27.png'); break;
      case 11:
        iconPath = require('../../assets/icons/Life/11.png'); break;
      case 22:
        iconPath = require('../../assets/icons/Life/22.png'); break;
      case 33:
        iconPath = require('../../assets/icons/Life/33.png'); break;
      case 44:
        iconPath = require('../../assets/icons/Life/44.png'); break;
      case 55:
        iconPath = require('../../assets/icons/Life/55.png'); break;
      case 66:
        iconPath = require('../../assets/icons/Life/66.png'); break;
      case 77:
        iconPath = require('../../assets/icons/Life/77.png'); break;
      case 88:
        iconPath = require('../../assets/icons/Life/88.png'); break;
      case 99:
        iconPath = require('../../assets/icons/Life/99.png'); break;
      default:
        iconPath = require('../../assets/icons/Knowledge/21.png'); break;
    }

    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={containerStyle}>
          <View style={iconContainer}>
            <Image
              source={iconPath}
              style={iconStyle}
            />
          </View>
          <View style={textContainer}>
            <Text style={textStyle}>
              {this.props.title}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'transparent',
    flex: 1,
    marginTop: 15
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 0.04 * SCREEN_WIDTH,
    color: 'white',
    textAlign: 'center'
  },
  iconContainer: {
    alignItems: 'center'
  },
  iconStyle: {
    margin: 5,
    width: 0.2 * SCREEN_WIDTH,
    height: 0.2 * SCREEN_WIDTH
  }
};

export default ListItem;