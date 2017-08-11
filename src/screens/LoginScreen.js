import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import BackgroundImage from '../components/BackgroundImage';
import { Input } from '../components/Input';
//import CheckBox from 'react-native-checkbox';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginScreen extends Component {
 
  static navigationOptions = {
    title: 'login',
    headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: '',
  };
constructor(props){
  super(props);
  this.state = { checked: false}
}
 renderCheckBox(){

 }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={styles.containerStyle}
            scrollEnabled
            bounces={false}
          >
            <Image
              source={require('../../assets/icons/4.png')}
            // style={{ width: 0.4 * SCREEN_WIDTH }}
            />
            <Input
              iconSource={require('../../assets/icons/doc.png')}
              placeholder='username'
              style={{ marginTop: 20 }}
            />
            <Input
              iconSource={require('../../assets/icons/locked.png')}
              placeholder='password'
              secure={true}
            />
            <Button
              onPress={() => navigate('mainScreen')}
              title="login"
              buttonStyle={styles.buttonStyle}
              color='white'
              fontWeight='bold'
              textStyle={{textDecorationLine: 'underline'}}
            />
            <View style={{
              flexDirection: 'row', flex: 1,
              backgroundColor: 'rgba(0,0,0,0)', margin: 15
            }}>
              <View style={{ flex: 5, marginLeft: 15 }}>
                <CheckBox
                  center
                  title='Click Here'
                  checkedIcon='check-square-o'
                  uncheckedIcon='square-o'
                  checkedColor='black'
                  checked={this.state.checked}
               // onIconPress= {this.checked()}
                  containerStyle={{
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderRadius: 0, borderWidth: 0
                  }}
                  textStyle={{ color: 'white' }}
                />
              </View>
              <View style={{ flex: 5, marginTop: 15 }}>
                <Text style={{ color: 'white' }}>
                  Forgot your password
              </Text>
              </View>
            </View>
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
  buttonStyle: {
    borderRadius: 25,
    backgroundColor: '#4891DE',
    width: 0.9 * SCREEN_WIDTH,
    height: 0.08 * SCREEN_HEIGHT,
    marginTop: 10
  },
};
export default LoginScreen;