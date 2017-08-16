import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { BackgroundImage, Spinner } from '../components';
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
            data={this.props.notifications}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {this.renderSpinner()}
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

const mapStateToProps = ({ noti }) => {
  const { notifications, loading } = noti;
  return { notifications, loading };
};


export default connect(mapStateToProps,
  {
    fetchNotifications
  })
  (NotificationsScreen);

