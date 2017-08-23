import {
  CLEAR_STATE,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  USERNAME_CHANGED,
  PHONE_CHANGED,
  DATE_CHANGED,
  NAME_CHANGED,
  ADDRESS_CHANGED,
  FORGET_PASSWORD,
  FORGET_PASSOWRD_SUCCESS,
  FORGET_PASSOWRD_FAILED,
  FORGET_COMPLETE,
  SIGNUP_USER_FAILED,
  LOGOUT,
  LOGOUT_USER_SUCCESS
} from './types';
import { Platform, AsyncStorage } from 'react-native';
import AuthPersistance from './AuthPersistance';

export const clear = () => {
  return { type: CLEAR_STATE };
}

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    email: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    password: text
  };
};

export const userNameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    username: text
  };
};

export const phoneChanged = (text) => {
  return {
    type: PHONE_CHANGED,
    phone: text
  };
};

export const dateChanged = (text) => {
  return {
    type: DATE_CHANGED,
    date: text
  };
};

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    name: text
  };
};

export const addressChanged = (text) => {
  return {
    type: ADDRESS_CHANGED,
    address: text
  };
};

export const signUpUser = ({ username, password, email, phone, address, anniversaryDate, name }) => {
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
    formData.append('address', address);

    fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/register', {
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
            let token = responseJson.api_key;
            AsyncStorage.setItem('token', token, signUpSuccess(dispatch, token));
          } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
          }
        }
        else {
          dispatch({ type: SIGNUP_USER_FAILED, error: responseJson.message });
        }
      });
  };
};

const signUpSuccess = (dispatch, token) => {
  console.log('TOKEN WASAL: ', token);
  dispatch({ type: SIGNUP_USER_SUCCESS, result: token });
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
        if (responseJson.result) {
          dispatch({ type: FORGET_PASSOWRD_SUCCESS, result: responseJson.message });
        } else {
          dispatch({ type: FORGET_PASSOWRD_FAILED, error: responseJson.message });
        }
      });
  };
};

export const loginUser = ({ username, password, checked }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    var formData = new FormData();

    formData.append('username', username);
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
            AsyncStorage.setItem('token', token, loginSuccess(dispatch, token, checked, username, password));
          } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
          }
        } else {
          dispatch({ type: LOGIN_USER_FAILED, error: responseJson.message });
        }
      });
  };
};

const loginSuccess = (dispatch, token, checked, username, password) => {
  console.log('TOKEN WASAL: ', token);
  console.log(checked, username, password);
  if (checked) {
    try {
      AsyncStorage.multiSet([['username', username], ['password', password]], () => {
        dispatch({ type: LOGIN_USER_SUCCESS, result: token });
      });
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }
  else {
    dispatch({ type: LOGIN_USER_SUCCESS, result: token });
  }
};

export const logout = () => {
  console.log('hereeeeeeeeeeee');
  return (dispatch) => {
    dispatch({ type: LOGOUT });
    try {
      AsyncStorage.removeItem('token', logoutSuccess(dispatch));
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }
};

const logoutSuccess = (dispatch) => {
  dispatch({ type: LOGOUT_USER_SUCCESS, resultLogout: 'success' });
};