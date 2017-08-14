import React from 'react';
import { AsyncStorage } from 'react-native'

class AuthPersistance extends React.Component {

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  async remove(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
}

export default AuthPersistance;