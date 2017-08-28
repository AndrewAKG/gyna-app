import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { BackgroundImage, Spinner } from '../components';

const { height, width } = Dimensions.get('window');

class LoadingScreen extends Component {
  render() {
    return (
      <BackgroundImage>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={styles.LoadingImageStyle}
            source={require('../../assets/icons/bigZ.png')}
          />
          <Spinner />
        </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  LoadingImageStyle: {
    flex: 1,
    width: 0.5 * width,
    height: 0.2 * height
  }
};

export default LoadingScreen;
