import React, { Component } from 'react';
import { View, Image, Text, ScrollView, Dimensions, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { BackgroundImage, SearchInput, Spinner } from '../components';
import ListItem from '../components/ListItem';
import LifeData from '../LifeData.json';
import { searchContent, searchWordChanged } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LifeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Your Life',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerTitle: 'Your Life',
    tabBarIcon: ({ tintColor }) => (
      // setting the Tab's Icon
      <Image
        source={require('../../assets/icons/Tabs/life.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = { search: false, keyword: '', searchData: [], data: LifeData };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ searchData: nextProps.searchData });
  }

  onWordChange(text) {
    this.setState({ keyword: text });
    this.props.searchWordChanged(text);
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

  renderContent() {
    const { navigate } = this.props.navigation;

    if (!this.state.search) {
      return (
        <View style={styles.scrollStyle}>
          <ScrollView>
            <FlatList
              data={LifeData}
              numColumns={3}
              renderItem={({ item }) =>
                <ListItem
                  title={item.title}
                  iconType={item.key}
                  onPress={() => navigate('dataList', { category: item.category, title: item.title })}
                />
              }
              keyExtractor={(item, index) => item.key}
              extraData={this.state.data}
            />
          </ScrollView>
        </View>
      );
    }
    else {
      if (this.props.loading) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner />
          </View>
        );
      } else if (this.props.searchData.length == 0) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, backgroundColor: 'transparent', color: 'white' }}>
              No Data matched ur search word
            </Text>
          </View>
        );
      } else {
        return (
          <View style={{ flex: 9 }}>
            <ScrollView>
              <FlatList
                data={this.props.searchData}
                renderItem={({ item }) =>
                  <ListDataItem
                    title={(item.title) ? item.title : item.name}
                    iconType={this.fetchType(item)}
                  />
                }
                keyExtractor={(item, index) => index}
                extraData={this.state.searchData}
              />
            </ScrollView>
          </View>
        );
      }
    }
  }

  render() {
    const { scrollStyle, searchContainer, inputStyle } = styles;
    const { navigate } = this.props.navigation;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <SearchInput
              placeholder="Search"
              iconSource={
                (!this.state.search) ?
                  require('../../assets/icons/search.png') : require('../../assets/icons/x.png')
              }
              onIconPress={
                (!this.state.search) ?
                  () => {
                    const { keyword } = this.state;
                    this.setState({ search: true });
                    this.props.searchContent({ keyword });
                  }
                  :
                  () => {
                    this.setState({ search: false });
                  }
              }
              value={this.props.keyword}
              onChangeText={this.onWordChange.bind(this)}
            />
          </View>
          {this.renderContent()}
        </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  scrollStyle: {
    flex: 9
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 6
  }
};

const mapStateToProps = ({ dataList }) => {
  const { loading, searchData, keyword } = dataList;
  return { loading, searchData, keyword };
};

export default connect(mapStateToProps, { searchContent, searchWordChanged })(LifeScreen);
