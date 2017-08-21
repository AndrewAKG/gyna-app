import {
  DATA_FETCH,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_FAILED,
  SEARCH_FETCH,
  SEARCH_FETCH_SUCCESS,
  SEARCH_FETCH_FAILED,
  SEARCH_WORD_CHANGED,
  EMPTY_SEARCH_WORD
} from './types';
import { AsyncStorage } from 'react-native';

export const searchWordChanged = (text) => {
  return {
    type: SEARCH_WORD_CHANGED,
    payload: text
  };
};

export const emptySearchWord = () => {
  return {
    type: EMPTY_SEARCH_WORD
  };
};

export const searchContent = ({ keyword }) => {
  console.log('D5AL ACTIONS', keyword);
  return (dispatch) => {
    dispatch({ type: SEARCH_FETCH });

    AsyncStorage.getItem('token', (err, token) => {
      if (err) {
        console.log(err);
      }
      else {
        fetch(
          'http://scope-rubix.com/gyna-backend/public_html/api/search?api_key='
          + token + '&keyword=' + keyword, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
            }
          }).then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.result) {
              dispatch({ type: SEARCH_FETCH_SUCCESS, payload: responseJson.returns.data });
            }
            else {
              dispatch({ type: SEARCH_FETCH_FAILED, error: responseJson.returns });
            }
          });
      }
    });
  };
};

export const fetchData = ({ category }) => {
  return (dispatch) => {
    dispatch({ type: DATA_FETCH });

    AsyncStorage.getItem('token', (err, token) => {
      if (err) {
        console.log(err);
      }
      else {
        fetch('http://scope-rubix.com/gyna-backend/public_html/api/' + category + '?api_key=' + token, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
        }).then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.result) {
              dispatch({ type: DATA_FETCH_SUCCESS, payload: responseJson.returns.data });
            }
            else {
              dispatch({ type: DATA_FETCH_FAILED, error: responseJson.returns });
            }
          });
      }
    });
  };
};