/**
 * this component is used whenever i want to take a text field as input from user
 */
import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

const Input = ({ value, placeholder }) => {
  const { containerStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <View style={{flex: 2}}>
        <Image style={{width: 32, height: 32}} 
        source={ require('../../assets/icons/22.png')}/>
          </View>
          <View style={{flex: 8}}>
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
    width: 200,
  },
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: "200",
     height: 50,
    width: 200,
  }

}

export { Input };
