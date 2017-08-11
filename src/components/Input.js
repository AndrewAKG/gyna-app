/**
 * this component is used whenever i want to take a text field as input from user
 */
import React from 'react';
import { View, Text, TextInput, Image, Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;


const Input = ({ value, placeholder, iconSource }) => {
  const { containerStyle, inputStyle, imageStyle } = styles;

  return (
    <View style={containerStyle}>
      <View style={{ flex: 2 }}>
        <Image
          style={imageStyle}
          source={iconSource}
        />
      </View>
      <View style={{ flex: 8 }}>
        <TextInput
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
 * Styles used for ths component , includes the input style and lable for input 
 */
const styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0.1,
    borderColor: 'white',
    backgroundColor: '#5c1634',
    height: 50,
    width: 0.8 * SCREEN_WIDTH
  },
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: "200",
    height: 50,
    width: 0.8 * SCREEN_WIDTH,
  },
  imageStyle: {
    width: 32,
    height: 32,
    margin: 10
  }
}

export { Input };
