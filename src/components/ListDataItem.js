import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
  Dimensions
} from 'react-native';
import { Divider, Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ListDataItem extends React.Component {
  renderIcon() {
    if (this.props.iconType) {
      const { type, icon, image } = this.props.iconType;
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
          <Icon
            iconStyle={arrowIcon}
            name='navigate-next'
            color='white'
            size={0.1 * SCREEN_WIDTH}
            containerStyle={arrowContainer}
            onPress={this.props.onArrowPress}
          />
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