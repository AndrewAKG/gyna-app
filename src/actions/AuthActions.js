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
} from './types';
import axios from 'axios';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const userNameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};

export const addressChanged = (text) => {
  return {
    type: ADDRESS_CHANGED,
    payload: text
  };
};

export const phoneChanged = (text) => {
  return {
    type: PHONE_CHANGED,
    payload: text
  };
};

export const dateChanged = (text) => {
  return {
    type: DATE_CHANGED,
    payload: text
  };
};

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    var formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);
    formData.append('device_token', 'ios');
    formData.append('version', '10.3.2');

    fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }).then((response) => response.json())
      .then((responseJson) => {
        dispatch({ type: LOGIN_USER_SUCCESS, result: responseJson.message });
      });
  };
};

export const signUpUser = ({ username, password, email, phone, workingAddress, anniversaryDate, name }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });
    console.log(email + 'email');
    console.log(anniversaryDate + 'date');
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('name', name);
    formData.append('mobile', phone);
    formData.append('anniversary_date', anniversaryDate);
    formData.append('address', workingAddress);

    fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }).then((response) => response.json())
      .then((responseJson) => {
        dispatch({ type: SIGNUP_USER_SUCCESS, result: responseJson.message });
      });
  };
};

export const forgetPassword = ({ email }) => {
  return (dispatch) => {
    dispatch({ type: FORGET_PASSWORD });

    var formData = new FormData();
    formData.append('email', email);

    fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/forget-password', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      params: formData
    }).then((response) => response.json())
      .then((responseJson) => {
        dispatch({ type: FORGET_PASSOWRD_SUCCESS, result: responseJson.message });
      });
  };
};