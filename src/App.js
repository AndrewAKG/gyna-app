import React from 'react';
import { Asset } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Navigator from './screens/Navigator';
import reducers from './reducers';
import LoadingScreen from './screens/LoadingScreen';

const assets = [
  require('../assets/icons/1.png'),
  require('../assets/icons/2.png'),
  require('../assets/icons/bigZ.png'),
  require('../assets/icons/welcome.png'),
  require('../assets/icons/4.png')
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
      require('../assets/icons/4.png')
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
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Navigator />
      </Provider>
    );
  }

}