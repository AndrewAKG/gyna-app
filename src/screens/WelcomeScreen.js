import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import BackgroundImage from '../components/BackgroundImage';

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
          <View style={viewStyle}>
            <Image
              style={{ width: 0.35 * width, height: 0.25 * height, paddingTop: 10 }}
              source={require('../../assets/icons/4.png')}

            />
          </View>
          <View style={viewStyle}>
            <Image
              style={{ width: width, height: 0.30 * height }}
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
            />
          </View>
          <View style={viewStyle}>
            <Button
              onPress={() => navigate('more')}
              title="list"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
            />
          </View>
          <View style={viewStyle}>
            <Button
              onPress={() => navigate('mainScreen')}
              title="to tab Screen"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
            />
            <Button

              onPress={() => navigate('signUp')}
              title="sign up"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
            />
          </View>
        </View>
      </BackgroundImage >
    );
  }
}

const styles = {
  buttonStyle: {
    borderRadius: 25,
    backgroundColor: '#4891DE',
    width: 0.7 * width,
    height: 0.05 * height
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default WelcomeScreen;