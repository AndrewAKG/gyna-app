import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const MoreScreenButton = ({ onPress, title, buttonStyle, fontSize }) => {
  const {  viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Button
        onPress={onPress}
        title={title}
        buttonStyle={buttonStyle}
        color='white'
        fontWeight='500'
        fontSize={fontSize}
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { MoreScreenButton };