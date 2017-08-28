/**
 * this component is used whenever i want to take a text field as input from user
 */
import React from 'react';
import { View, Text, TextInput, Image, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.input.focus();
  }

  render() {
    const {
      value,
      placeholder,
      iconSource,
      style,
      Type,
      secure,
      onChangeText,
      returnKeyType,
      onSubmit,
    } = this.props;
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
            ref={el => this.input = el}
            returnKeyType={returnKeyType}
            keyboardType={Type}
            autoCorrect={false}
            placeholder={placeholder}
            placeholderTextColor='white'
            style={inputStyle}
            value={value}
            secureTextEntry={secure}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmit}
          />
        </View>
      </View>
    );
  }
}

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
    width: 0.75 * SCREEN_WIDTH,
    margin: 10
  },
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 0.055 * SCREEN_WIDTH,
    lineHeight: 23,
    fontWeight: "200",
    height: 50,
    width: 0.6 * SCREEN_WIDTH
  },
  imageStyle: {
    width: 0.08 * SCREEN_WIDTH,
    height: 0.08 * SCREEN_WIDTH,
    margin: 15
  }
}

export { Input };
