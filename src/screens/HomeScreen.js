import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    header: null,
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: '',
    tabBarIcon: ({ tintColor }) => (
      // setting the Tab's Icon
      <Image
        source={require('../../assets/icons/home.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };

  render() {
    return (
      <BackgroundImage>

        <View style={{ flex: 1 }}>

          <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start', marginTop:20 }}>
            <Image
              source={require('../../assets/icons/bigZ.png')}
              style={{ width: 0.35 * SCREEN_WIDTH, height: 0.3 * SCREEN_HEIGHT, paddingTop: 10 }}
            />
          </View>

          <View style={{ flex: 6, alignItems: 'flex-end', justifyContent: 'flex-start' }}>
            <Image
              source={require('../../assets/icons/Welcome.png')}
              style={{ width: 0.94 * SCREEN_WIDTH, height: 0.355 * SCREEN_HEIGHT }} />
          </View>

        </View>

      </BackgroundImage>
    );
  }
}

const styles = {
  icon: {
    width: 24,
    height: 24,
    marginTop: 6
  }
};

export default HomeScreen;