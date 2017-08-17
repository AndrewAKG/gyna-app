/**
 * this component is used whenever i want to take a text field as input from user
 */
import React from 'react';
import { View, Text, TextInput, Image, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const InputMoreScreen = ({ value, placeholder, style, Type, secure, onChangeText }) => {
  const { containerStyle, imageStyle } = styles;

  return (
    <View style={containerStyle}>
      <View style={{ flex: 1, alignItems:'flex-start' }}>
        <TextInput
          keyboardType={Type}
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor='white'
          style={style}
          value={value}
          secureTextEntry={secure}
          onChangeText={onChangeText}
       //   returnKeyType='next'
        />
      </View>
    </View>
  );
};

/**
 * Styles used for ths component , includes the input style 
 */
const styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 0.05 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    borderColor: 'white',
    backgroundColor: '#5c1634',
    height: 0.08 * SCREEN_HEIGHT,
    width: 0.8 * SCREEN_WIDTH,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 5
  }
}

export { InputMoreScreen };
