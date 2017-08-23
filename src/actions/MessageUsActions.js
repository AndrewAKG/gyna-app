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
  from './types';
import { Platform, AsyncStorage } from 'react-native';
import AuthPersistance from './AuthPersistance';

export const clearSuccess = () => {
  return { type: CLEAR_SUCCESS };
}

export const clearIssue = () => {
  return { type: CLEAR_ISSUE };
}

export const senderNameChanged = (text) => {
  return {
    type: SENDER_NAME_CHANGED,
    senderName: text
  };
}

export const senderEmailChanged = (text) => {
  return {
    type: SENDER_EMAIL_CHANGED,
    senderEmail: text
  };
}

export const subjectChanged = (text) => {
  return {
    type: SUBJECT_CHANGED,
    senderSubject: text
  };
}

export const messageChanged = (text) => {
  return {
    type: MESSAGE_CHANGED,
    senderMessage: text
  };
}

export const sendMessage = ({ name, subject, message, email }) => {
  return (dispatch) => {
    dispatch({ type: SEND_MESSAGE });

    AsyncStorage.getItem('token', (err, token) => {
      if (err) {
        console.log(err);
      }
      else {
        if ((name || subject || message || email) === '') {
          dispatch({ type: SEND_MESSAGE_FAILED, error: 'Please enter all fields' });
        }
        else {
          var formData = new FormData();
          formData.append('name', name);
          formData.append('subject', subject);
          formData.append('message', message);
          formData.append('api_key', token);
          formData.append('email', email);
          console.log(name + ' name');
          console.log(subject + ' subjecct');
          console.log(email + ' email');
          console.log(message + ' message');

          fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
            },
            body: formData
          }).then((response) => response.json())
            .then((responseJson) => {
              if (responseJson.result) {
                dispatch({ type: SEND_MESSAGE_SUCCESS, result: responseJson.result });
              } else {
                dispatch({ type: SEND_MESSAGE_FAILED, error: responseJson.result });
              }
            });
        }
      }
    });
  };
};

export const sendIssue = ({ name, subject, message, email }) => {
  console.log('gh hna');
  return (dispatch) => {
    dispatch({ type: SEND_ISSUE });

    AsyncStorage.getItem('token', (err, token) => {
      if (err) {
        console.log(err);
      }
      else {
        if ((name === '') || (subject === '') || (email === '') || (message === '')) {
          dispatch({ type: SEND_ISSUE_FAILED, errorIssue: 'Please enter all fields !!' });
        } else {
          var formData = new FormData();
          formData.append('name', name);
          formData.append('subject', subject);
          formData.append('message', message);
          formData.append('api_key', token);
          formData.append('email', email)
          console.log(name + ' name');
          console.log(subject + ' subjecct');
          console.log(email + ' email');
          console.log(message + ' message');
          fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/message', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
            },
            body: formData
          }).then((response) => response.json())
            .then((responseJson) => {
              if (responseJson.result) {

                dispatch({ type: SEND_ISSUE_SUCCESS, result: responseJson.result });
              } else {
                dispatch({ type: SEND_ISSUE_FAILED, errorIssue: responseJson.result });
              }
            });
        }
      }
    });
  };
};