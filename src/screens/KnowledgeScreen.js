import React, { Component } from 'react';
import { View, Image, Text, ScrollView, Dimensions, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { BackgroundImage, SearchInput, Spinner, ListDataItem } from '../components';
import ListItem from '../components/ListItem';
import KnowledgeData from '../KnowledgeData.json';
import { searchContent, searchWordChanged } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class KnowledgeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Knowledge',
    headerLeft: null,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: 'Your Knowledge',
    headerBackTitle: 'Back',
    tabBarIcon: ({ tintColor }) => (
      // setting the Tab's Icon
      <Image
        source={require('../../assets/icons/Tabs/knowledge.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = { search: false, keyword: '', searchData: [], data: KnowledgeData };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ searchData: nextProps.searchData });
  }

  onWordChange(text) {
    this.setState({ keyword: text });
    this.props.searchWordChanged(text);
  }

  renderContent() {
    if (!this.state.search) {
      return (
        <View style={styles.scrollStyle}>
          <ScrollView>
            <FlatList
              data={this.state.data}
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
                    title={item.name}
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
    const { searchContainer, inputStyle } = styles;
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
                    console.log('WENAK YABNY');
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

export default connect(mapStateToProps, { searchContent, searchWordChanged })(KnowledgeScreen);