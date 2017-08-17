import {
  SUBJECT_CHANGED,
  MESSAGE_CHANGED,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
  SENDER_NAME_CHANGED,
  SENDER_EMAIL_CHANGED
}
  from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  success: false,
  message: '',
  serverMessage: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case SENDER_NAME_CHANGED:
      return { ...state, name: action.payLoad };

    case SENDER_EMAIL_CHANGED:
      return { ...state, email: action.payLoad };

    case SUBJECT_CHANGED:
      return { ...state, subject: action.payLoad };

    case MESSAGE_CHANGED:
      return { ...state, message: action.payLoad };

    case SEND_MESSAGE:
      return { ...state, loading: true };

    case SEND_MESSAGE_SUCCESS:
      console.log(action.result+'success');
      return { ...state, ...INITIAL_STATE, serverMessage: action.result, success: true };

    case SEND_MESSAGE_FAILED:
      console.log(action.result+'failed');
      return { ...state, ...INITIAL_STATE };

    default:
      return state;
  }
};