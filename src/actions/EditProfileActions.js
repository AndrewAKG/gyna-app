import {
  EDIT_USERNAME,
  EDIT_ADDRESS,
  EDIT_DATE,
  EDIT_EMAIL,
  EDIT_PHONE,
  EDIT_PROFILE,
  EDIT_PROFILE_FAILED,
  EDIT_PROFILE_SUCCESS,
  FETCH_USERDATA,
  FETCH_USERDATA_FAILED,
  FETCH_USERDATA_SUCCESS
} from './types';
import { AsyncStorage } from 'react-native';

export const editUsername = (text) => {
  return {
    type: EDIT_USERNAME,
    payload: text
  };
};

export const editPhone = (text) => {
  return {
    type: EDIT_PHONE,
    payload: text
  };
};

export const editAddress = (text) => {
  return {
    type: EDIT_ADDRESS,
    payload: text
  };
};

export const editEmail = (text) => {
  return {
    type: EDIT_EMAIL,
    payload: text
  };
};

export const editDate = (text) => {
  return {
    type: EDIT_DATE,
    payload: text
  };
};

export const userData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USERDATA });

    AsyncStorage.getItem('token', (err, token) => {
      if (err) {
        console.log(err);
      }
      else {

        var formData = new FormData();
        formData.append('api_key', token);

        fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/get_user_details?api_key=' + token, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          },
        }).then((response) => response.json())
          .then((responseJson) => {
            if (!(responseJson === null)) {
              dispatch({ type: FETCH_USERDATA_SUCCESS, result: responseJson });
            } else {
              dispatch({ type: FETCH_USERDATA_FAILED, result: null });
            }
          });
      }
    });
  };
};

export const editProfile = ({ username, mobile, token, address, date, email}) => {
  return (dispatch) => {
    dispatch({ type: EDIT_PROFILE });

    AsyncStorage.getItem('token', (err, token) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log(username);
        console.log(mobile);
        console.log(email);
        console.log(address);
        console.log(date)
        var formData = new FormData();
        formData.append('username', username);
        formData.append('mobile', mobile);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('anniversary_date', date);
        formData.append('api_key', token);

        fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/edit_profile', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          },
          body: formData
        }).then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.result) {
              dispatch({ type: EDIT_PROFILE_SUCCESS, result: responseJson.message });
            } else {
              dispatch({ type: EDIT_PROFILE_FAILED, result: responseJson.message });
            }
          });
      }
    });
  };
};