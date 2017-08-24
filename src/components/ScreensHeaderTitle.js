import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class ScreensHeaderTitle extends React.Component {
  render() {
    const { title, iconType } = this.props;
    const { containerStyle, textStyle, iconStyle } = styles;
    let iconPath;

    switch (iconType) {
      case 'tabBar':
        iconPath = require('../../assets/icons/rsz_bigz.png'); break;
      case 'guidelines':
        iconPath = require('../../assets/icons/Knowledge/1.png'); break;
      case 'medical_article':
        iconPath = require('../../assets/icons/Knowledge/2.png'); break;
      case 'trainings':
        iconPath = require('../../assets/icons/Knowledge/3.png'); break;
      case 'workshop_videos':
        iconPath = require('../../assets/icons/Knowledge/4.png'); break;
      case 'quick_tips':
        iconPath = require('../../assets/icons/Knowledge/5.png'); break;
      case 'gyn_global_societies':
        iconPath = require('../../assets/icons/Knowledge/6.png'); break;
      case 'video_of_the_week':
        iconPath = require('../../assets/icons/Knowledge/7.png'); break;
      case 'fashion_tips':
        iconPath = require('../../assets/icons/Life/1.png'); break;
      case 'hair':
        iconPath = require('../../assets/icons/Life/2.png'); break;
      case 'nutrition_tips':
        iconPath = require('../../assets/icons/Life/3.png'); break;
      case 'day_recipe':
        iconPath = require('../../assets/icons/Life/4.png'); break;
      case 'family_tips':
        iconPath = require('../../assets/icons/Life/5.png'); break;
      case 'home_tips':
        iconPath = require('../../assets/icons/Life/6.png'); break;
      case 'work_life_balance':
        iconPath = require('../../assets/icons/Life/7.png'); break;
      case 'articles':
        iconPath = require('../../assets/icons/Life/8.png'); break;
      case 'today_quotes':
        iconPath = require('../../assets/icons/Life/9.png'); break;
      default:
        iconPath = require('../../assets/icons/image.png'); break;
    }

    return (
      <View style={containerStyle}>
        <Image
          source={iconPath}
          style={iconStyle}
        />
        <Text style={textStyle}>
          {title}
        </Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  textStyle: {
    fontSize: 0.05 * SCREEN_WIDTH,
    color: 'white'
  },
  iconStyle: {
    width: 0.065 * SCREEN_WIDTH,
    height: 0.065 * SCREEN_WIDTH,
    marginRight: 10,
    paddingVertical: 10
  }
};

export { ScreensHeaderTitle };