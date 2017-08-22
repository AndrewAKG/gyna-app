import {
  SUBJECT_CHANGED,
  MESSAGE_CHANGED,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
  SENDER_NAME_CHANGED,
  SENDER_EMAIL_CHANGED,
  SEND_ISSUE,
  SEND_ISSUE_SUCCESS,
  SEND_ISSUE_FAILED
}
  from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  success: '',
  message: '',
  serverMessage: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case SENDER_NAME_CHANGED:
      return { ...state, name: action.senderName };

    case SENDER_EMAIL_CHANGED:
      return { ...state, email: action.senderEmail };

    case SUBJECT_CHANGED:
      return { ...state, subject: action.senderSubject };

    case MESSAGE_CHANGED:
      return { ...state, message: action.senderMessage };

    case SEND_MESSAGE:
      return { ...state, loading: true };

    case SEND_MESSAGE_SUCCESS:
      console.log(action.result + 'success');
      return { ...state, ...INITIAL_STATE, serverMessage: action.result, success: 'true' };

    case SEND_MESSAGE_FAILED:
      console.log(action.result + 'failed');
      return { ...state, ...INITIAL_STATE, success: 'false' };

    case SEND_ISSUE:
      return { ...state, loading: true };

    case SEND_ISSUE_SUCCESS:
      console.log(action.result + 'success');
      return { ...state, ...INITIAL_STATE, serverMessage: action.result, success: 'true' };

    case SEND_ISSUE_FAILED:
      console.log(action.result + 'failed');
      return { ...state, ...INITIAL_STATE, success:'false' };

    default:
      return state;
  }
};