import React from 'react';
import { View, Dimensions } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class RememberForgetPass extends React.Component {

  renderCheckBox() {
    return (
      <CheckBox
        center
        title='Remember Me'
        checkedIcon='check-square-o'
        uncheckedIcon='square-o'
        checkedColor='white'
        checked={this.props.checked}
        onIconPress={this.props.onCheckBoxPress}
        containerStyle={styles.checkboxContainerStyle}
        textStyle={styles.checkBoxText}
      />
    );
  }

  render() {
    const {
      containerStyle,
      textStyle,
      forgetPassContainer,
      forgetPassButton
    } = styles;

    return (
      <View style={containerStyle}>

        {this.renderCheckBox()}

        <Button
          onPress={this.props.onButtonPress}
          title="Forget your password?"
          buttonStyle={forgetPassButton}
          color='white'
          fontWeight='normal'
          textStyle={textStyle}
          containerViewStyle={forgetPassContainer}
        />

      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 10
  },
  forgetPassButton: {
    borderRadius: 0,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  textStyle: {
    fontSize: 0.04 * SCREEN_WIDTH
  },
  forgetPassContainer: {
    flex: 5,
    alignItems: 'flex-start'
  },
  checkboxContainerStyle: {
    flex: 5,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 0
  },
  checkBoxText: {
    color: 'white',
    fontWeight: 'normal',
    textAlign: 'left',
    fontSize: 0.04 * SCREEN_WIDTH
  }
}

export default RememberForgetPass;