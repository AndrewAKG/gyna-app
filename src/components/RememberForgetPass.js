import React from 'react';
import { View } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

class RememberForgetPass extends React.Component {

  constructor(props) {
    super(props);
    this.state = { checked: false }
  }

  onPress() {
    this.setState({ checked: !(this.state.checked) })
  }

  renderCheckBox() {
    return (
      <CheckBox
        center
        title='Remember Me'
        checkedIcon='check-square-o'
        uncheckedIcon='square-o'
        checkedColor='white'
        checked={this.state.checked}
        onIconPress={() => this.onPress()}
        containerStyle={styles.checkboxStyle}
        textStyle={{ color: 'white', fontWeight: "normal", textAlign: "left", fontSize: 12, paddingLeft: -5 }}
      />
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      checkboxContainerStyle,
      CheckBoxViewStyle,
      buttonTextStyle,
      forgetPasswordViewStyle,
      forgerPasswordButtonStyle
    } = styles;

    return (
      <View style={CheckBoxViewStyle}>

        <View style={checkboxContainerStyle}>
          {this.renderCheckBox()}
        </View>

        <View style={forgetPasswordViewStyle}>
          <Button
            onPress={() => navigate('signUp')}
            title="forget your password?"
            buttonStyle={forgerPasswordButtonStyle}
            color='white'
            fontWeight='600'
            textStyle={buttonTextStyle}
          />
        </View>

      </View>
    );
  }
}

const styles = {
  forgerPasswordButtonStyle: {
    borderRadius: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    width: 150,
    height: 100,
    marginTop: -14,
  },
  buttonTextStyle: {
    textDecorationLine: 'underline',
    fontSize: 12,
    textAlign: 'left',
  },
  forgetPasswordViewStyle: {
    flex: 5,
    marginTop: -10,
    marginRight: 20,
    alignItems:'center'
  },
  CheckBoxViewStyle: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 15
  },
  checkboxContainerStyle: {
    flex: 5,
    alignItems: 'flex-start'
  },
  checkboxStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 0
  }
}

export default RememberForgetPass;