/**
 * this component is used whenever i want to take a text field as input from user
 */
import React from 'react';
import { View, Text, TextInput, Image, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Input = ({ value, placeholder, iconSource, style, Type }) => {
  const { containerStyle, inputStyle, imageStyle } = styles;

  return (
    <View style={[containerStyle, style]}>
      <View style={{ flex: 2 }}>
        <Image
          style={imageStyle}
          source={iconSource}
        />
      </View>
      <View style={{ flex: 8 }}>
        <TextInput
          keyboardType={Type}
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor='white'
          style={inputStyle}
          value={value}
        //   onChangeText={onChangeText}
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
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: 'white',
    backgroundColor: '#5c1634',
    height: 60,
    width: 0.9 * SCREEN_WIDTH,
    margin: 10
  },
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: "200",
    height: 50
  },
  imageStyle: {
    width: 25,
    height: 25,
    margin: 15
  }
}

export { Input };