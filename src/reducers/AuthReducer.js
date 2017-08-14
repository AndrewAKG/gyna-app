import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  USERNAME_CHANGED,
  ADDRESS_CHANGED,
  PHONE_CHANGED,
  DATE_CHANGED,
  NAME_CHANGED,
  FORGET_PASSWORD,
  FORGET_PASSOWRD_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  user: null,
  name: '',
  phone: '',
  workingAddress: '',
  username: '',
  anniversaryDate: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payLoad);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payLoad };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payLoad };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.result };
    case NAME_CHANGED:
      return { ...state, name: action.payLoad };
    case PHONE_CHANGED:
      return { ...state, phone: action.payLoad };
    case DATE_CHANGED:
      return { ...state, date: action.payLoad };
    case USERNAME_CHANGED:
      return { ...state, username: action.payLoad };
    case ADDRESS_CHANGED:
      return { ...state, address: action.payLoad };
    case SIGNUP_USER:
      return { ...state, loading: true };
    case SIGNUP_USER_SUCCESS:
      console.log(action.result);
      return { ...state, ...INITIAL_STATE, user: action.result };
      case FORGET_PASSWORD:
      return { ...state, email: action.payLoad };
      case FORGET_PASSOWRD_SUCCESS:
      console.log(action.result);
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};