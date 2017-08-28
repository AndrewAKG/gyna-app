/**
 * this component is used whenever i want to take a text field as input from user
 */
import React from 'react';
import { View, Text, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SearchInput = ({
  value,
  placeholder,
  iconSource,
  onIconPress,
  onChangeText,
  returnKeyType,
  onSubmit
}) => {
  const { containerStyle, inputStyle, imageStyle } = styles;

  return (
    <View style={containerStyle}>
      <View style={{ flex: 8 }}>
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor='white'
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmit}
        />
      </View>
      <View style={{ flex: 2 }}>
        <TouchableOpacity onPress={onIconPress}>
          <Ionicons
              name={iconSource}
              color="white"
              size={0.08 * SCREEN_WIDTH}
            />
        </TouchableOpacity>
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
    borderRadius: 0.03 * SCREEN_HEIGHT,
    borderWidth: 1.5,
    borderColor: 'white',
    backgroundColor: 'transparent',
    height: 0.06 * SCREEN_HEIGHT,
    width: 0.8 * SCREEN_WIDTH,
    margin: 10
  },
  inputStyle: {
    paddingLeft: 20,
    color: 'white',
    fontSize: 0.045 * SCREEN_WIDTH,
    lineHeight: 23,
    fontWeight: '400',
    height: 50,
    width: 0.6 * SCREEN_WIDTH
  },
  imageStyle: {
    width: 0.06 * SCREEN_WIDTH,
    height: 0.06 * SCREEN_WIDTH,
    margin: 15
  }
};

export { SearchInput };
