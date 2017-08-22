import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Divider, Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ListDataItem extends React.Component {
  renderIcon() {
    if (this.props.iconType) {
      const { type, icon, image, category, name } = this.props.iconType;
      if (!category) {
        if (icon) {
          return (
            <Icon
              iconStyle={styles.pdfIcon}
              name={type}
              color='white'
              size={0.2 * SCREEN_WIDTH}
            />
          );
        }
        else {
          return (
            <Image
              source={{ uri: image }}
              style={styles.pdfIcon}
            />
          )
        }
      }
      else {

        let iconPath;

        switch (name) {
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
          case 'taday_quotes':
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
          <Image
            source={iconPath}
            style={styles.pdfIcon}
          />
        )
      }
    }
  }

  render() {
    const {
      containerStyle,
      pdfPicContainer,
      pdfIcon,
      textContainer,
      textStyle,
      arrowContainer,
      arrowIcon,
      DividerStyle
    } = styles;

    return (
      <View style={{ flex: 1, margin: 10 }}>
        <View style={containerStyle}>
          <View style={pdfPicContainer}>
            {this.renderIcon()}
          </View>
          <View style={textContainer}>
            <Text style={textStyle}>
              {this.props.title}
            </Text>
          </View>
          <TouchableOpacity onPress={this.props.onArrowPress}>
            <Icon
              iconStyle={arrowIcon}
              name='navigate-next'
              color='white'
              size={0.1 * SCREEN_WIDTH}
              containerStyle={arrowContainer}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Divider style={DividerStyle} />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 9,
    flexDirection: 'row'
  },
  pdfPicContainer: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  pdfIcon: {
    width: 0.2 * SCREEN_WIDTH,
    height: 0.2 * SCREEN_WIDTH
  },
  textContainer: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  textStyle: {
    color: 'white',
    fontSize: 0.05 * SCREEN_WIDTH,
    textAlign: 'left',
    fontWeight: '400'
  },
  arrowContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrowIcon: {
    margin: 5
  },
  DividerStyle: {
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 5
  }
}

export { ListDataItem };