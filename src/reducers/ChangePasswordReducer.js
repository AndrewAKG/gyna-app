import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCESS,
  OLD_PASSOWRD_CHANGED,
  NEW_PASSOWRD_CHANGED,
  CONFIRM_PASSOWRD_CHANGED,
  CHANGE_PASSWORD_FAILED
}
  from '../actions/types';

const INITIAL_STATE = {
  oldPassowrd: '',
  newPassword: '',
  success: false,
  loading: false,
  message: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payLoad);
  switch (action.type) {
    case OLD_PASSOWRD_CHANGED:
      return { ...state, oldPassword: action.payLoad };
    case NEW_PASSOWRD_CHANGED:
      return { ...state, newPassword: action.payLoad };
    case CHANGE_PASSWORD:
      return { ...state, loading: true };
    case CHANGE_PASSWORD_SUCESS:
      console.log(action.result);
      return { ...state, ...INITIAL_STATE, message: action.result, success: true };
    case CHANGE_PASSWORD_FAILED:
      console.log(action.result);
      return { ...state, message: '', success: false, oldPassword: '', newPassword: '', loading: false };
    default:
      return state;
  }
};