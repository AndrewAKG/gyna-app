import {
  DATA_FETCH,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_FAILED,
  SEARCH_FETCH,
  SEARCH_FETCH_SUCCESS,
  SEARCH_FETCH_FAILED,
  SEARCH_WORD_CHANGED,
  EMPTY_SEARCH_WORD
} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  searchData: [],
  keyword: '',
  errorMsg: '',
  success: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case DATA_FETCH:
      return { ...state, loading: true };

    case DATA_FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload, success: true };

    case DATA_FETCH_FAILED:
      return { ...state, loading: false, errorMsg: action.error, success: false };

    case SEARCH_WORD_CHANGED:
      return { ...state, keyword: action.payLoad };

    case SEARCH_FETCH:
      return { ...state, loading: true };

    case SEARCH_FETCH_SUCCESS:
      return { ...state, loading: false, searchData: action.payload, success: true };

    case SEARCH_FETCH_FAILED:
      return { ...state, loading: false, errorMsg: action.error, success: false };

    case EMPTY_SEARCH_WORD:
      return { ...state, keyword: '' };

    default:
      return state;
  }
}