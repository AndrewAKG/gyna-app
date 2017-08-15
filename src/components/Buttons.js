import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Buttons = ({ onPress, title }) => {
    const { buttonStyle, viewStyle } = styles;
  
    return (
        <View style={viewStyle}>
        <Button
          onPress={onPress}
          title={title}
          buttonStyle={buttonStyle}
          color='white'
          fontWeight='500'
          fontSize={0.047 * SCREEN_WIDTH}
        />
      </View>

    );
  };
  
  const styles = {
  buttonStyle: {
    borderRadius: 0.05 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    borderColor: 'white',
    backgroundColor: '#5C1634',
    width: 0.7 * SCREEN_WIDTH,
    height: 0.08 * SCREEN_HEIGHT,
    margin: 18
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
export { Buttons }