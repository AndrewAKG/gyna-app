import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { BackgroundImage, Spinner, ListDataItem } from '../components';
import { fetchData } from '../actions';

class DataListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'dataList',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTintColor: 'white',
    headerTitle: navigation.state.params.title
  });

  componentWillMount() {
    const { category } = this.props.navigation.state.params;
    this.props.fetchData({ category });
  }

  renderText() {
    if (this.props.data.length == 0) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, backgroundColor: 'transparent', color: 'white' }}>
            No Data Found in this Category
          </Text>
        </View>
      );
    }
  }

  renderSpinner() {
    if (this.props.loading) {
      return (
        <Spinner />
      );
    }
  }

  render() {
    return (
      <BackgroundImage>
        <ScrollView>
          <FlatList
            data={this.props.data}
            renderItem={({ item }) =>
              <ListDataItem
                title={item.name}
              />
            }
            keyExtractor={(item, index) => index}
          />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {this.renderSpinner()}
          </View>
          <View>
            {this.renderText()}
          </View>
        </ScrollView>
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

const mapStateToProps = ({ dataList }) => {
  const { data, loading } = dataList;
  return { data, loading };
};


export default connect(mapStateToProps,
  {
    fetchData
  })
  (DataListScreen);

