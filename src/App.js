import React from 'react';
import { Asset } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Navigator from './screens/Navigator';
import reducers from './reducers';
import LoadingScreen from './screens/LoadingScreen';
import configureStore from './state/Store';
import Data from './Images.json';

const assets = [
  require('../assets/icons/1.png'),
  require('../assets/icons/2.png'),
  require('../assets/icons/bigZ.png'),
  require('../assets/icons/4.png'),
  require('../assets/icons/22.png'),
  require('../assets/icons/5.png'),
  require('../assets/icons/f-doc.png'),
  require('../assets/icons/18.png'),
  require('../assets/icons/13.png'),
  require('../assets/icons/14.png'),
  require('../assets/icons/email.png'),
  require('../assets/icons/more.png'),
  require('../assets/icons/noti.png'),
  require('../assets/icons/home.png'),
  require('../assets/icons/knowledge.png'),
  require('../assets/icons/phone.png'),
  require('../assets/icons/life.png')
];

const store = configureStore();

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
      require('../assets/icons/4.png'),
      require('../assets/icons/12.png'),
      require('../assets/icons/5.png'),
      require('../assets/icons/f-doc.png'),
      require('../assets/icons/18.png'),
      require('../assets/icons/13.png'),
      require('../assets/icons/14.png'),
      require('../assets/icons/more.png'),
      require('../assets/icons/noti.png'),
      require('../assets/icons/home.png'),
      require('../assets/icons/knowledge.png'),
      require('../assets/icons/life.png'),
      require('../assets/icons/email.png'),
      require('../assets/icons/phone.png')
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