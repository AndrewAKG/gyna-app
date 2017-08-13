import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

class BackgroundImage extends Component {
  render() {
    return (
      <Image
        style={styles.backgroundImageStyle}
        source={require('../../assets/icons/1.png')}
      >
        {this.props.children}
      </Image>
    );
  }
}

const styles = {
  backgroundImageStyle: {
    flex: 1,
    width,
    height
  }
};

export { BackgroundImage };
