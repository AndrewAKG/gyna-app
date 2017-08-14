import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';

class ListItem extends React.PureComponent {
  render() {
    const { containerStyle, textContainer, textStyle, iconContainer, iconStyle } = styles;
    return (
      <TouchableWithoutFeedback style={containerStyle}>
        <View style={iconContainer}>
          <Image
            source={iconSource}
            style={iconStyle}
          />
        </View>
        <View style={textContainer}>
          <Text style={textStyle}>
            {this.props.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'transparent',
    flex: 1
  },
  textContainer: {
    flex: 2,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 16,
    color: 'white'
  },
  iconContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    margin: 5,
    width: 32,
    height: 32
  }
};

export default ListItem;