import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { BackgroundImage } from '../components';

const { height, width } = Dimensions.get('window');

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'welcome',
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    const { buttonStyle, viewStyle } = styles;

    return (
      <BackgroundImage>

        <View style={{ flex: 1 }}>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Image
              style={{ width: 0.35 * width, height: 0.3 * height, paddingTop: 10 }}
              source={require('../../assets/icons/4_1.png')}
            />
          </View>

          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Image
              style={{ width: 0.94 * width, height: 0.36 * height }}
              source={require('../../assets/icons/2.png')}
            />
          </View>

          <View style={viewStyle}>
            <Button
              onPress={() => navigate('login')}
              title="Next"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
              fontSize={0.047 * width}
            />
          </View>

        </View>

      </BackgroundImage >
    );
  }
}

const styles = {
  buttonStyle: {
    borderRadius: 0.05 * height,
    backgroundColor: '#00C1FF',
    width: 0.8 * width,
    height: 0.095 * height
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default WelcomeScreen;