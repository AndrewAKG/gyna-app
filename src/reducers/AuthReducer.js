import {
  CLEAR_STATE,
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
  ADDRESS_CHANGED,
  LOGIN_USER_FAILED,
  SIGNUP_USER_FAILED,
  LOGOUT,
  LOGOUT_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  user: null,
  name: '',
  phone: '',
  username: '',
  address: '',
  anniversaryDate: '',
  success: '',
  signUpSuccess: '',
  logoutSuccess: '',
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CLEAR_STATE:
      return { ...INITIAL_STATE, error: state.error };

    case EMAIL_CHANGED:
      return { ...state, email: action.email };

    case PASSWORD_CHANGED:
      return { ...state, password: action.password };

    case LOGIN_USER:
      return { ...state, loading: true };

    case LOGOUT:
      return { ...state, loading: true };

    case LOGOUT_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: null, logoutSuccess: 'true' };

    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.result, success: 'true' };

    case LOGIN_USER_FAILED:
      return { ...state, ...INITIAL_STATE, success: 'false', error: action.error };

    case NAME_CHANGED:
      return { ...state, name: action.name };

    case ADDRESS_CHANGED:
      return { ...state, address: action.address };

    case PHONE_CHANGED:
      return { ...state, phone: action.phone };

    case DATE_CHANGED:
      return { ...state, date: action.date };

    case USERNAME_CHANGED:
      return { ...state, username: action.username };

    case SIGNUP_USER:
      return { ...state, loading: true };

    case SIGNUP_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.result, signUpSuccess: 'true' };

    case SIGNUP_USER_FAILED:
      return { ...state, signUpSuccess: 'false', loading: false, error: action.error };

    default:
      return state;
  }
};