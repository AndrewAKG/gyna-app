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
        iconPath = require('../../assets/icons/Knowledge/21.png'); break;
      case 'medical_article':
        iconPath = require('../../assets/icons/Knowledge/22.png'); break;
      case 'trainings':
        iconPath = require('../../assets/icons/Knowledge/23.png'); break;
      case 'workshop_videos ':
        iconPath = require('../../assets/icons/Knowledge/24.png'); break;
      case 'quick_tips':
        iconPath = require('../../assets/icons/Knowledge/25.png'); break;
      case 'gyn_global_societies':
        iconPath = require('../../assets/icons/Knowledge/26.png'); break;
      case 'video_of_the_week':
        iconPath = require('../../assets/icons/Knowledge/27.png'); break;
      case 'fashion-tips':
        iconPath = require('../../assets/icons/Life/11.png'); break;
      case 'beauty-tips':
        iconPath = require('../../assets/icons/Life/22.png'); break;
      case 'nutrition_tips':
        iconPath = require('../../assets/icons/Life/33.png'); break;
      case 'day_recipe':
        iconPath = require('../../assets/icons/Life/44.png'); break;
      case 'family_tips':
        iconPath = require('../../assets/icons/Life/55.png'); break;
      case 'home_tips':
        iconPath = require('../../assets/icons/Life/66.png'); break;
      case 'work_life_balance':
        iconPath = require('../../assets/icons/Life/77.png'); break;
      case 'articles':
        iconPath = require('../../assets/icons/Life/88.png'); break;
      case 'today_quotes':
        iconPath = require('../../assets/icons/Life/99.png'); break;
      case 'clothes':
        iconPath = require('../../assets/icons/Life/clothes.png'); break;
      case 'shoes':
        iconPath = require('../../assets/icons/Life/shoes.png'); break;
      case 'bags':
        iconPath = require('../../assets/icons/Life/bags.png'); break;
      case 'watches':
        iconPath = require('../../assets/icons/Life/watches.png'); break;
      case 'accessories':
        iconPath = require('../../assets/icons/Life/accessories.png'); break;
      default:
        iconPath = require('../../assets/icons/x.png'); break;
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
    width: 0.055 * SCREEN_WIDTH,
    height: 0.055 * SCREEN_WIDTH,
    marginRight: 10,
    paddingVertical: 10
  }
};

export { ScreensHeaderTitle };