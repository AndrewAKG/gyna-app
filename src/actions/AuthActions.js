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
  FORGET_PASSOWRD_SUCCESS,
  LOGIN_USER_FAILED
} from './types';
import { Platform, AsyncStorage } from 'react-native';
import AuthPersistance from './AuthPersistance';

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

    fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/forget-password?email=' + email, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
    }).then((response) => response.json())
      .then((responseJson) => {
        dispatch({ type: FORGET_PASSOWRD_SUCCESS, result: responseJson.message });
      });
  };
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password, checked }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    var formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);
    if (Platform.OS === 'ios') {
      formData.append('device_token', 'ios');
      formData.append('version', parseInt(Platform.Version, 10));
    }
    else {
      formData.append('device_token', 'android');
      formData.append('version', Platform.Version);
    }

    fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.result) {
          try {
            let token = responseJson.message;
            AsyncStorage.setItem('token', token, loginSuccess(dispatch, token));
          } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
          }
        } else {
          dispatch({ type: LOGIN_USER_FAILED, result: responseJson.message });
        }
      });
  };
};

const loginSuccess = (dispatch, token) => {
  console.log('TOKEN WASAL: ', token);
  dispatch({ type: LOGIN_USER_SUCCESS, result: token });
};