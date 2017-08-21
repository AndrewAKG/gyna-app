import {
  EMAIL_CHANGED,
  FORGET_PASSWORD,
  FORGET_PASSOWRD_SUCCESS,
  FORGET_PASSOWRD_FAILED
} from '../actions/types';
const INITIAL_STATE = {
  email: '',
  loading: false,
  forgetPasswordSuccess: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMAIL_CHANGED:
      return { ...state, email: action.email };

    case FORGET_PASSWORD:
      return { ...state, loading: true, error: '' };

    case FORGET_PASSOWRD_SUCCESS:
      return { ...state, ...INITIAL_STATE, forgetPasswordSuccess: true };


    case FORGET_PASSOWRD_FAILED:
      return { ...state, forgetPasswordSuccess: false, loading: false, error: action.error };

    default:
      return state;
  }
};
