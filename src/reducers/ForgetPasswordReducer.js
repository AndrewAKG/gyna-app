import {
  EMAIL_CHANGED,
  FORGET_PASSWORD,
  FORGET_PASSOWRD_SUCCESS,
  FORGET_PASSOWRD_FAILED,
} from '../actions/types';
const INITIAL_STATE = {
  email: '',
  loading: false,
  forgetPasswordSucess: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMAIL_CHANGED:
      return { ...state, email: action.payLoad };

    case FORGET_PASSWORD:
      return { ...state, email: action.payLoad, loading: true };

    case FORGET_PASSOWRD_SUCCESS:
      console.log(action.result);
      return { ...state, ...INITIAL_STATE, forgetPasswordSucess: true, loading: false };


    case FORGET_PASSOWRD_FAILED:
      console.log(action.result);
      return { ...state, forgetPasswordSucess: false, loading: false, error: 'Password_Failed' };

    default:
      return state;
  }
};
