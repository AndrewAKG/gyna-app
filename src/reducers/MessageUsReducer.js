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
  SEND_ISSUE_FAILED,
  CLEAR_SUCCESS,
  CLEAR_ISSUE
}
  from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  success: '',
  message: '',
  serverMessage: '',
  loading: false,
  error: '',
  errorIssue: '',
  successIssue: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CLEAR_SUCCESS:
      return { ...INITIAL_STATE, error: state.error };

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
      console.log(action.error + 'failed');
      return { ...state, ...INITIAL_STATE, success: 'false', error: action.error };

    case SEND_ISSUE:
      return { ...state, loading: true };

    case SEND_ISSUE_SUCCESS:
      console.log(action.result + 'success');
      return { ...state, ...INITIAL_STATE, serverMessage: action.result, successIssue: 'true' };

    case SEND_ISSUE_FAILED:
      console.log(action.errorIssue + 'failed');
      return { ...state, ...INITIAL_STATE, successIssue: 'false', errorIssue: action.errorIssue };

      case CLEAR_ISSUE:
      return { ...INITIAL_STATE, errorIssue: state.errorIssue };

    default:
      return state;
  }
};