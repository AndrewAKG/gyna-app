import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import KnowledgeScreen from './KnowledgeScreen';
import LifeScreen from './LifeScreen';
import NotificationsScreen from './NotificationsScreen';
import MoreScreen from './MoreScreen';

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
              activeTintColor: '#182A58',
              labelStyle: {
                fontSize: 10,
                paddingBottom: 5
              },
              tabStyle: {
                flex: 1,
                alignItems: 'center'
              },
              style: {
                backgroundColor: 'white',
                height: 56,
                elevation: 8,
                shadowColor: '#000'
              },
              inactiveTintColor: 'rgba(0,0,0,0.54)'
            }
          })
      }
    },
      {
        headerMode: 'none'
      });

    return (
      <MainNavigator />
    );
  }
}

export default Navigator;
