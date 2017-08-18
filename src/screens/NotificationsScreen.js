import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { BackgroundImage, Spinner, ListDataItem } from '../components';
import { fetchNotifications } from '../actions';

class NotificationsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'notifications',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTintColor: 'white',
    headerTitle: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      // setting the Tab's Icon
      <Image
        source={require('../../assets/icons/Tabs/noti.png')}
        style={[styles.icon, { tintColor }]}
      />
    )
  };

  componentWillMount() {
    this.props.fetchNotifications();
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
    if (this.props.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Spinner />
        </View>
      );
    } else if (this.props.notifications.length == 0) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, backgroundColor: 'transparent', color: 'white' }}>
            No Notifications at the moment
          </Text>
        </View>
      );
    } else {
      return (
        <ScrollView>
          <FlatList
            data={this.props.notifications}
            renderItem={({ item }) =>
              <ListDataItem
                title={(item.title) ? item.title : item.name}
                iconType={this.fetchType(item)}
              />
            }
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
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

const mapStateToProps = ({ noti }) => {
  const { notifications, loading } = noti;
  return { notifications, loading };
};


export default connect(mapStateToProps,
  {
    fetchNotifications
  })
  (NotificationsScreen);

