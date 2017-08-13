import React from 'react';
import { View, Image, Text } from 'raect-native';

class ScreensHeaderTitle extends React.Component {
  render() {
    const { title, iconSource } = this.props;
    const { containerStyle, textStyle, iconStyle } = styles;

    return (
      <View style={containerStyle}>
        <Image
          source={iconSource}
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  textStyle: {
    fontSize: 15,
    color: 'white'
  },
  iconStyle: {
    width: 24,
    height: 24,
    margin: 5
  }
}

export { ScreensHeaderTitle };