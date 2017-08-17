import {
  SUBJECT_CHANGED,
  MESSAGE_CHANGED,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
  SENDER_NAME_CHANGED,
  SENDER_EMAIL_CHANGED
}
  from './types';
import { Platform, AsyncStorage } from 'react-native';
import AuthPersistance from './AuthPersistance';

export const senderNameChanged = (text) => {
  return {
    type: SENDER_NAME_CHANGED,
    payload: text
  };
}

export const senderEmailChanged = (text) => {
  return {
    type: SENDER_EMAIL_CHANGED,
    payload: text
  };
}

export const subjectChanged = (text) => {
  return {
    type: SUBJECT_CHANGED,
    payload: text
  };
}

export const messageChanged = (text) => {
  return {
    type: MESSAGE_CHANGED,
    payload: text
  };
}

export const sendMessage = ({ name, subject, message }) => {
  return (dispatch) => {
    dispatch({ type: SEND_MESSAGE });
    
    AsyncStorage.getItem('token', (err, token) => {
      if (err) {
        console.log(err);
      }
      else {
        
        var formData = new FormData();
        formData.append('name', name);
        formData.append('subject', subject);
        formData.append('message', message);
        formData.append('api_key', token);
        
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
              dispatch({ type: SEND_MESSAGE_SUCCESS, result: responseJson.result });
            } else {
              dispatch({ type: SEND_MESSAGE_FAILED, result: responseJson.result });
            }
          });
      }
    });
};
};