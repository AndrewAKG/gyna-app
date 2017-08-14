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

const store = configureStore();
const assets = [
  require('../assets/icons/1.png'),
  require('../assets/icons/2.png'),
  require('../assets/icons/bigZ.png'),
  require('../assets/icons/4_1.png'),
  require('../assets/icons/5.png'),
  require('../assets/icons/doc.png'),
  require('../assets/icons/18.png'),
  require('../assets/icons/14.png'),
  require('../assets/icons/email.png'),
  require('../assets/icons/more.png'),
  require('../assets/icons/noti.png'),
  require('../assets/icons/home.png'),
  require('../assets/icons/knowledge.png'),
  require('../assets/icons/phone.png'),
  require('../assets/icons/life.png'),
  require('../assets/icons/Welcome.png'),
  require('../assets/icons/locked.png'),
  require('../assets/icons/Book.png'),
  require('../assets/icons/21.png'),
  require('../assets/icons/22.png'),
  require('../assets/icons/23.png'),
  require('../assets/icons/24.png'),
  require('../assets/icons/25.png'),
  require('../assets/icons/26.png'),
  require('../assets/icons/27.png')
];

export default class App extends React.Component {

  state = {
    Ready: false,
    appLoaded: false
  }

  componentWillMount() {
    this._cacheResourceAsync();
  }

  componentDidMount() {
    this.appLoaded();
  }

  async _cacheResourceAsync() {
    const images = [
      require('../assets/icons/1.png'),
      require('../assets/icons/2.png'),
      require('../assets/icons/bigZ.png'),
      require('../assets/icons/4_1.png'),
      require('../assets/icons/5.png'),
      require('../assets/icons/doc.png'),
      require('../assets/icons/18.png'),
      require('../assets/icons/14.png'),
      require('../assets/icons/more.png'),
      require('../assets/icons/noti.png'),
      require('../assets/icons/home.png'),
      require('../assets/icons/knowledge.png'),
      require('../assets/icons/life.png'),
      require('../assets/icons/email.png'),
      require('../assets/icons/phone.png'),
      require('../assets/icons/Welcome.png'),
      require('../assets/icons/locked.png'),
      require('../assets/icons/Book.png'),
      require('../assets/icons/21.png'),
      require('../assets/icons/22.png'),
      require('../assets/icons/23.png'),
      require('../assets/icons/24.png'),
      require('../assets/icons/25.png'),
      require('../assets/icons/26.png'),
      require('../assets/icons/27.png')
    ];

    for (let image of images) {
      await Asset.fromModule(image).downloadAsync();
    }

    this.setState({ Ready: true })
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