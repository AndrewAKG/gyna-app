import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ChangePasswordReducer from './ChangePasswordReducer';
import NotificationsReducer from './NotificationsReducer';
import DataListsReducer from './DataListsReducer';
import MessageUsReducer from './MessageUsReducer';
import EdirProfileReducer from './EditProfileReducer';
import ForgetPasswordReducer from './ForgetPasswordReducer';

export default combineReducers({
  auth: AuthReducer,
  changePassword: ChangePasswordReducer,
  noti: NotificationsReducer,
  dataList: DataListsReducer,
  message: MessageUsReducer,
  data: EdirProfileReducer,
  forget : ForgetPasswordReducer
});