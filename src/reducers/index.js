import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ChangePasswordReducer from './ChangePasswordReducer';
import NotificationsReducer from './NotificationsReducer';

export default combineReducers({
  auth: AuthReducer,
  changePassword: ChangePasswordReducer,
  noti: NotificationsReducer
});