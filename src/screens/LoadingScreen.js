import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';

const { height, width } = Dimensions.get('window');

class LoadingScreen extends Component {
  render() {
    return (
      <BackgroundImage>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={styles.LoadingImageStyle}
            source={require('../../assets/icons/bigZ.png')}
          />
        </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  LoadingImageStyle: {
    flex: 1,
    width: 0.5 * width,
    height: 0.5 * height
  }
};

export default LoadingScreen;
