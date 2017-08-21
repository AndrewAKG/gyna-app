import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  USERNAME_CHANGED,
  PHONE_CHANGED,
  DATE_CHANGED,
  NAME_CHANGED,
  LOGIN_USER_FAILED,
  SIGNUP_USER_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  user: null,
  name: '',
  phone: '',
  username: '',
  anniversaryDate: '',
  success: false,
  signUpSuccess: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMAIL_CHANGED:
      return { ...state, email: action.payLoad };

    case PASSWORD_CHANGED:
      return { ...state, password: action.password };

    case LOGIN_USER:
      return { ...state, loading: true };

    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.result, success: true };

    case LOGIN_USER_FAILED:
      return { ...state, user: null, success: false, email: '', password: '', loading: false, error: 'Login_Failed' };

    case NAME_CHANGED:
      return { ...state, name: action.payLoad };

    case PHONE_CHANGED:
      return { ...state, phone: action.payLoad };

    case DATE_CHANGED:
      return { ...state, date: action.payLoad };

    case USERNAME_CHANGED:
      return { ...state, username: action.username };

    case SIGNUP_USER:
      return { ...state, loading: true };

    case SIGNUP_USER_SUCCESS:
      console.log(action.result);
      return { ...state, ...INITIAL_STATE, user: action.result, signUpSuccess: true };

    case SIGNUP_USER_FAILED:
      console.log(action.result);
      return { ...state, signUpSuccess: false, loading: false, error: 'SignUp_Failed' };

    default:
      return state;
  }
};