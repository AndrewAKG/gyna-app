import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MoreReducer from './MoreReducer';

export default combineReducers({
  auth: AuthReducer,
  more: MoreReducer
});