import {
  NOTIFICATIONS_FETCH,
  NOTIFICATIONS_FETCH_SUCCESS
} from './types';
import { AsyncStorage } from 'react-native';

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch({ type: NOTIFICATIONS_FETCH });

    AsyncStorage.getItem('token', (err, token) => {
      if (err) {
        console.log(err);
      }
      else {
        fetch('http://scope-rubix.com/gyna-backend/public_html/api/notifications?api_key=' + token, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
        }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            dispatch({ type: NOTIFICATIONS_FETCH_SUCCESS, payload: responseJson.returns.data });
          });
      }
    });
  };
};