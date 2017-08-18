/**
 * this component is used whenever i want to take a text field as input from user
 */
import React from 'react';
import { View, Text, TextInput, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class InputPassword extends React.Component {
  state = { secured: true }

  onPressInButton() {
    this.setState({ secured: false });
  }

  onPressOutButton() {
    this.setState({ secured: true });
  }

  render() {
    const {
      value,
      onChange,
      onKeyPress,
      placeholder,
      style,
      returnKeyType,
      onChangeText,
      onSubmit
    } = this.props;

    return (
      <View style={styles.containerStyle}>

        <View style={{ flex: 2 }}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/icons/Forms/locked.png')}
          />
        </View>

        <View style={{ flex: 5 }}>
          <TextInput
            {... this.props}
            autoCorrect={false}
            placeholder={placeholder}
            placeholderTextColor='white'
            style={style}
            value={value}
            secureTextEntry={this.state.secured}
            onChangeText={onChangeText}
            ref='password'
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmit}
          />
        </View>

        <View style={{ flex: 3, alignItems: 'flex-end', marginRight: 10 }}>
          <TouchableWithoutFeedback
            onPressIn={() => this.onPressInButton()}
            onPressOut={() => this.onPressOutButton()}
            style={{
              backfaceVisibility: 'hidden',
              overflow: 'hidden'
            }}
          >
            <Entypo
              name='eye'
              color="white"
              size={30}
            />
          </TouchableWithoutFeedback>
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
    height: 0.095 * SCREEN_HEIGHT,
    width: 0.8 * SCREEN_WIDTH,
    margin: 10
  },
  imageStyle: {
    width: 25,
    height: 25,
    margin: 15
  }
}

export { InputPassword };
