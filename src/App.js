import React from 'react';
import { Asset } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Navigator from './screens/Navigator';
import LoadingScreen from './screens/LoadingScreen';
import configureStore from './state/Store';
import Data from './Images.json';
import reducers from './reducers';
import { Permissions, Notifications } from 'expo';
import registerForNotifications from './services/Push_notifications';

const store = configureStore();
const assets = [
  require('../assets/icons/1.png'),
  require('../assets/icons/image.png'),  
  require('../assets/icons/2.png'),
  require('../assets/icons/bigZ.png'),
  require('../assets/icons/rsz_bigz.png'),
  require('../assets/icons/4_1.png'),
  require('../assets/icons/5.png'),
  require('../assets/icons/18.png'),
  require('../assets/icons/arrow.png'),
  require('../assets/icons/pdfIcon.png'),
  require('../assets/icons/Book.png'),
  require('../assets/icons/search.png'),
  require('../assets/icons/Welcome.png'),
  require('../assets/icons/Forms/doc.png'),
  require('../assets/icons/Forms/phone.png'),
  require('../assets/icons/Forms/14.png'),
  require('../assets/icons/Forms/email.png'),
  require('../assets/icons/Forms/locked.png'),
  require('../assets/icons/Tabs/more.png'),
  require('../assets/icons/Tabs/noti.png'),
  require('../assets/icons/Tabs/home.png'),
  require('../assets/icons/Tabs/knowledge.png'),
  require('../assets/icons/Tabs/life.png'),
  require('../assets/icons/Knowledge/21.png'),
  require('../assets/icons/Knowledge/22.png'),
  require('../assets/icons/Knowledge/23.png'),
  require('../assets/icons/Knowledge/24.png'),
  require('../assets/icons/Knowledge/25.png'),
  require('../assets/icons/Knowledge/26.png'),
  require('../assets/icons/Knowledge/27.png'),
  require('../assets/icons/Life/11.png'),
  require('../assets/icons/Life/22.png'),
  require('../assets/icons/Life/33.png'),
  require('../assets/icons/Life/44.png'),
  require('../assets/icons/Life/55.png'),
  require('../assets/icons/Life/66.png'),
  require('../assets/icons/Life/77.png'),
  require('../assets/icons/Life/88.png'),
  require('../assets/icons/Life/99.png'),
  require('../assets/icons/Knowledge/1.png'),
  require('../assets/icons/Knowledge/2.png'),
  require('../assets/icons/Knowledge/3.png'),
  require('../assets/icons/Knowledge/4.png'),
  require('../assets/icons/Knowledge/5.png'),
  require('../assets/icons/Knowledge/6.png'),
  require('../assets/icons/Knowledge/7.png'),
  require('../assets/icons/Life/1.png'),
  require('../assets/icons/Life/2.png'),
  require('../assets/icons/Life/3.png'),
  require('../assets/icons/Life/4.png'),
  require('../assets/icons/Life/5.png'),
  require('../assets/icons/Life/6.png'),
  require('../assets/icons/Life/7.png'),
  require('../assets/icons/Life/8.png'),
  require('../assets/icons/Life/9.png'),
  require('../assets/icons/Life/clothes.png'),
  require('../assets/icons/Life/watches.png'),
  require('../assets/icons/Life/bags.png'),
  require('../assets/icons/Life/accessories.png'),
  require('../assets/icons/Life/shoes.png'),
  require('../assets/icons/ask.png')
];

export default class App extends React.Component {

  state = {
    appLoaded: false,
    notification: {}
  }

  componentWillMount() {
    
    registerForNotifications();
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification;
      if (origin === 'received' && text) {
        Alert.alert('New Push Notifiction',
          text, [{ text: 'ok' }]
        );
      }
    });
  }

  componentDidMount() {
    this.appLoaded();
  }

  appLoaded = async () => {
    const promises = assets.map(module => Asset.fromModule(module).downloadAsync());
    await Promise.all(promises);

    this.setState({ appLoaded: true });
  }

  render() {

    if (!this.state.appLoaded) {
      return <LoadingScreen />
    }

    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }

}