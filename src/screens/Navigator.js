import React, { Component } from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import KnowledgeScreen from './KnowledgeScreen';
import LifeScreen from './LifeScreen';
import NotificationsScreen from './NotificationsScreen';
import MoreScreen from './MoreScreen';
import ForgetPassowrd from './ForgetPassword';

class Navigator extends Component {
  render() {
    const MainNavigator = StackNavigator({
      welcome: {
        screen: WelcomeScreen
      },
      login: {
        screen: LoginScreen
      },
      signUp: {
        screen: SignUpScreen
      },
      forgetPassowrd: {
        screen: ForgetPassowrd
      },
      mainScreen: {
        screen: TabNavigator({
          home: { screen: HomeScreen },
          knowledge: { screen: KnowledgeScreen },
          life: { screen: LifeScreen },
          noti: { screen: NotificationsScreen },
          more: { screen: MoreScreen }
        }, {
            tabBarPosition: 'bottom',
            animationEnabled: true,
            swipeEnabled: true,
            tabBarOptions: {
              showIcon: true,
              upperCaseLabel: false,
              activeTintColor: '#FFFFFF',
              indicatorStyle: {
                backgroundColor: 'white'
              },
              labelStyle: {
                fontSize: 10,
                paddingBottom: 5
              },
              tabStyle: {
                flex: 1
              },
              style: {
                backgroundColor: '#5C1634',
                height: 56,
                elevation: 8,
                shadowColor: '#000'
              },
              inactiveTintColor: '#D0D3D4'
            }
          })
      }
    },
      {
        headerMode: (Platform.OS === 'ios') ? 'float' : 'screen'
      });

    return (
      <MainNavigator />
    );
  }
}

export default Navigator;
