import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';


export default function configureStore(initialState) {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}