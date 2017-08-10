import React from 'react';
import { Asset } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Navigator from './screens/Navigator';
import reducers from './reducers';
import LoadingScreen from './screens/LoadingScreen';
import rootReducer from './reducers/index';

const assets = [
  require('../assets/icons/1.png'),
  require('../assets/icons/2.png'),
  require('../assets/icons/bigZ.png'),
  require('../assets/icons/welcome.png'),
  require('../assets/icons/4.png'),
  require('../assets/icons/22.png'),
  require('../assets/icons/5.png'),
  require('../assets/icons/more.png'),
  require('../assets/icons/noti.png'),
  require('../assets/icons/home.png'),
  require('../assets/icons/knowledge.png'),
  require('../assets/icons/life.png')
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
      require('../assets/icons/welcome.png'),
      require('../assets/icons/4.png'),
      require('../assets/icons/12.png'),
      require('../assets/icons/5.png'),
      require('../assets/icons/more.png'),
      require('../assets/icons/noti.png'),
      require('../assets/icons/home.png'),
      require('../assets/icons/knowledge.png'),
      require('../assets/icons/life.png')
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
 configureStore() {
  const store = createStore(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
  render() {

    if (!this.state.appLoaded) {
      return <LoadingScreen />
    }

    return (

      <Provider store={this.configureStore()}>
        <Navigator />
      </Provider>
    );
  }

}