import {
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCESS,
    OLD_PASSOWRD_CHANGED,
    NEW_PASSOWRD_CHANGED,
    CONFIRM_PASSOWRD_CHANGED,
    CHANGE_PASSWORD_FAILED
}
from './types';

export const oldPasswordChanged = (text) => {
    return {
      type: OLD_PASSOWRD_CHANGED,
      payload: text
    };
}

export const newPasswordChanged = (text) => {
    return {
      type: NEW_PASSOWRD_CHANGED,
      payload: text
    };
}

export const confirmPasswordChanged = (text) => {
    return {
      type: CONFIRM_PASSOWRD_CHANGED,
      payload: text
    };
}

export const changePassword = ({ oldPassword, newPassword, apiKey }) => {
    return (dispatch) => {
      dispatch({ type: CHANGE_PASSWORD });
  
      var formData = new FormData();
      formData.append('old_password', oldPassword);
      formData.append('new_password', newPassword);
      formData.append('api_key',apiKey)
      
      fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/change_my_password', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      }).then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.result === true) {
            dispatch({ type: CHANGE_PASSWORD_SUCESS, result: responseJson.message });
          } else {
            dispatch({ type: CHANGE_PASSWORD_FAILED, result: responseJson.message });
          }
        });
    };
  };