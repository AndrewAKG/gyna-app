import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NotificationsReducer from './NotificationsReducer';

export default combineReducers({
  auth: AuthReducer,
  noti: NotificationsReducer
});