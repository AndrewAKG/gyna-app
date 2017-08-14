import React from 'react';
import { View, Image, Text } from 'react-native';

class ScreensHeaderTitle extends React.Component {
  render() {
    const { title, iconSource } = this.props;
    const { containerStyle, textStyle, iconStyle } = styles;

    return (
      <View style={containerStyle}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Image
            source={iconSource}
            style={iconStyle}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={textStyle}>
            {title}
          </Text>
        </View>
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
    fontSize: 16,
    color: 'white'
  },
  iconStyle: {
    width: 16,
    height: 16
  }
}

export { ScreensHeaderTitle };