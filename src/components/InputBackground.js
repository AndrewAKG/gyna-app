import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

class InputBackground extends Component {
  render() {
    return (
      <Image
        style={styles.backgroundImageStyle}
        source={require('../../assets/icons/5.png')}
      >
        {this.props.children}
      </Image>
    );
  }
}

const styles = {
  backgroundImageStyle: {
    width: 0.8 * width,
    height: 0.1 * height
  }
};

export default InputBackground;
