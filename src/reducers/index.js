import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ChangePasswordReducer from './ChangePasswordReducer';

export default combineReducers({
  auth: AuthReducer,
  more: ChangePasswordReducer
});