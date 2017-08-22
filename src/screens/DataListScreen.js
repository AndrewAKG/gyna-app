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

  fetchType(item) {
    if (item.attach) {
      return { icon: true, type: 'picture-as-pdf' };
    }
    else if (item.images.length !== 0) {
      return { icon: false, image: item.images[0] };
    }
    else if (item.link) {
      return { icon: true, type: 'ondemand-video' };
    }
  }

  navigateToScreens(item) {
    const { navigate } = this.props.navigation;

    if (item.attach) {
      return () => navigate('pdfScreen', { pdfLink: item.attach, title: item.title });
      //Linking.openURL(item.attach).catch(err => console.error('An error occurred', err));
    }
    else if (item.images.length !== 0) {
      return () => navigate('webviewScreen',
        {
          contentSource: item.content,
          title: item.title,
          image: item.images[0],
          sub_title: item.sub_title
        });
    }
    else if (item.link) {
      var oldLink = item.link;
      var newLink = oldLink.replace('watch?v=', 'embed/');
      return () => navigate('videoScreen', { videoLink: newLink, title: item.title });
    }
  }

  renderContent() {
    if (this.props.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Spinner />
        </View>
      );
    } else if (this.props.success) {
      if (this.props.data.length == 0) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, backgroundColor: 'transparent', color: 'white' }}>
              No Data Found in this Category
            </Text>
          </View>
        );
      } else {
        return (
          <ScrollView>
            <FlatList
              data={this.props.data}
              renderItem={({ item }) =>
                <ListDataItem
                  title={(item.title) ? item.title : item.name}
                  iconType={this.fetchType(item)}
                  onArrowPress={this.navigateToScreens(item)}
                />
              }
              keyExtractor={(item, index) => index}
            />
          </ScrollView>
        );
      }
    }
    else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, backgroundColor: 'transparent', color: 'white' }}>
            {this.props.errorMsg}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <BackgroundImage>
        {this.renderContent()}
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
  const { data, loading, success, errorMsg } = dataList;
  return { data, loading, success, errorMsg };
};


export default connect(mapStateToProps,
  {
    fetchData
  })
  (DataListScreen);

