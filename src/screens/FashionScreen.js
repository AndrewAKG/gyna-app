import React, { Component } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { BackgroundImage, Spinner, ListDataItem } from '../components';
import FashionData from '../FashionData.json';

class FashionScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'fashion',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTintColor: 'white',
    headerTitle: navigation.state.params.title
  });

  navigateToData(item) {
    return () => this.props.navigation.navigate('dataList',
      { category: item.category, title: item.title });
  }

  renderContent() {
    return (
      <ScrollView>
        <FlatList
          data={FashionData}
          renderItem={({ item }) =>
            <ListDataItem
              title={item.title}
              iconType={{ category: true, name: item.category }}
              onArrowPress={this.navigateToData(item)}
            />
          }
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    );
  }

  render() {
    return (
      <BackgroundImage>
        {this.renderContent()}
      </BackgroundImage>
    );
  }
}

export default FashionScreen;

