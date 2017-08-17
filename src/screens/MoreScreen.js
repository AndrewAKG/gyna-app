import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { BackgroundImage, Input, MoreScreenButton } from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class MoreScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'More',
    headerLeft: null,
    headerBackTitle: 'Back',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: '',
    tabBarIcon: ({ tintColor }) => (
      // setting the Tab's Icon
      <Image
        source={require('../../assets/icons/Tabs/more.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };

  render() {
    const { navigate } = this.props.navigation;
    const {
      containerStyle,
      getProfileStyle,
      imageViewStyle,
      imageStyle,
      textViewStyle,
      textStyle,
      buttonStyle
     } = styles;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>

          <ScrollView
            contentContainerStyle={containerStyle}
          >
            <View style={getProfileStyle}>

              <View style={imageViewStyle}>
                <Image
                  style={imageStyle}
                  source={require('../../assets/icons/Forms/locked.png')} />
              </View>

              <View style={textViewStyle}>
                <Text style={textStyle}>
                  DR/ZOZO
                </Text>
              </View>

            </View>

            <MoreScreenButton
              buttonStyle={buttonStyle}
              onPress={() => navigate('editProfile')}
              title='view/edit Profile'
              fontSize={0.047*SCREEN_WIDTH}
            />
            <MoreScreenButton
              buttonStyle={buttonStyle}
              onPress={() => navigate('changePassword')}
              title='Change Password'
              fontSize={0.047*SCREEN_WIDTH}
            />
            <MoreScreenButton
              buttonStyle={buttonStyle}
              onPress={() => navigate('contactUs')}
              title='Contact us'
              fontSize={0.047*SCREEN_WIDTH}
            />
            <MoreScreenButton
              buttonStyle={buttonStyle}
              onPress={() => navigate('helpDesk')}
              title='Help Desk'
              fontSize={0.047*SCREEN_WIDTH}
            />
            <MoreScreenButton
              buttonStyle={buttonStyle}
              onPress={() => console.log('logout')}
              title='logout'
              fontSize={0.047*SCREEN_WIDTH}
            />
          </ScrollView>

        </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 10,
    alignItems: 'center'
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 6
  },
  imageStyle: {
    width: 55,
    height: 55,
  },
  getProfileStyle: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 15,
    alignItems: 'center'
  },
  imageViewStyle: {
    flex: 4,
    alignItems: 'flex-end',
    marginRight: 20
  },
  textStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16
  },
  textViewStyle: {
    flex: 6,
    alignItems: 'flex-start'
  },
  buttonStyle: {
    borderRadius: 0.04 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    borderColor: 'white',
    backgroundColor: '#5C1634',
    width: 0.75 * SCREEN_WIDTH,
    height: 0.08 * SCREEN_HEIGHT,
    margin: 18
  },

};

export default MoreScreen;