import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCESS,
  OLD_PASSOWRD_CHANGED,
  NEW_PASSOWRD_CHANGED,
  CONFIRM_PASSOWRD_CHANGED,
  CHANGE_PASSWORD_FAILED,
  CLEAR_PASSOWRD
}
  from './types';

import { Platform, AsyncStorage } from 'react-native';
import AuthPersistance from './AuthPersistance';

export const clearPassword = () => {
  return { type: CLEAR_PASSOWRD };
}

export const oldPasswordChanged = (text) => {
  return {
    type: OLD_PASSOWRD_CHANGED,
    oldPassword: text
  };
}

export const newPasswordChanged = (text) => {
  return {
    type: NEW_PASSOWRD_CHANGED,
    newPassword: text
  };
}

export const confirmPasswordChanged = (text) => {
  return {
    type: CONFIRM_PASSOWRD_CHANGED,
    confirmPassword: text
  };
}

export const changePassword = ({ oldPassword, newPassword, confirmPassword }) => {
  return (dispatch) => {
    dispatch({ type: CHANGE_PASSWORD });

    AsyncStorage.getItem('token', (err, token) => {
      if (err) {
        console.log(err);
      }
      else {
        if (!(newPassword === confirmPassword)) {
          dispatch({ type: CHANGE_PASSWORD_FAILED, error: 'confirm password is not as new password' });
        }
        else {
          console.log(oldPassword + 'old');
          console.log(newPassword + 'new');
          var formData = new FormData();
          formData.append('old_password', oldPassword);
          formData.append('new_password', newPassword);
          formData.append('api_key', token);

          fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/change_my_password', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
            },
            body: formData
          }).then((response) => response.json())
            .then((responseJson) => {
              if (responseJson.result) {
                dispatch({ type: CHANGE_PASSWORD_SUCESS, result: responseJson.message });
              } else {
                dispatch({ type: CHANGE_PASSWORD_FAILED, error: responseJson.message });
              }
            });
        }
      }
    });
  };
};