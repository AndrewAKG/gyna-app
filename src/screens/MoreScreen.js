import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { BackgroundImage, Input } from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class MoreScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'More',
    headerLeft: null,
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
    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <ScrollView
           contentContainerStyle={styles.containerStyle}
          >
            <View style={{
              flexDirection: 'row',
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0)',
              marginTop: 20,
              marginLeft: 20,
              marginBottom: 20,
              alignItems:'center'
            }}>
            <View style={{ flex: 4,alignItems: 'flex-end',marginRight: 20}}>
              <Image
                style={{
                  width: 55,
                  height: 55,
                }}
                source={require('../../assets/icons/Forms/locked.png')} />
                </View>
                <View style={{flex: 6, alignItems:'flex-start'}}>
                  <Text style={{ color: 'white',backgroundColor: 'rgba(0,0,0,0)', fontSize: 16}}>
                    DR/ZOZO
                  </Text>
                </View>
            </View>
            <View style={styles.viewStyle}>
            <Button
              onPress={() => navigate('editProfile')}
              title="view/edit profile"
              buttonStyle={styles.buttonStyle}
              color='white'
              fontWeight='500'
              fontSize={0.047 * SCREEN_WIDTH}
            />
          </View>


          </ScrollView>

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
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  containerStyle: {
    paddingTop: 10,
    alignItems: 'center'
  },
  buttonStyle: {
    borderRadius: 0.05 * SCREEN_HEIGHT,
    borderWidth: 0.3,
    borderColor: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    width: 0.7 * SCREEN_WIDTH,
    height: 0.08 * SCREEN_HEIGHT,
    margin: 10
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
};

export default MoreScreen;