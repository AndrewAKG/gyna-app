import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { BackgroundImage } from '../components';

class KnowledgeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Knowledge',
    header: null,
    tabBarIcon: ({ tintColor }) => (
      // setting the Tab's Icon
      <Image
        source={require('../../assets/icons/knowledge.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };

  render() {
    return (
      <BackgroundImage>
        <View>
          <Text>
            Knowledge Screen
        </Text>
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

export default KnowledgeScreen;