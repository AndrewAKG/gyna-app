import {
  DATA_FETCH,
  DATA_FETCH_SUCCESS,
  SEARCH_FETCH,
  SEARCH_FETCH_SUCCESS,
  SEARCH_WORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  searchData: [],
  keyword: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case DATA_FETCH:
      return { ...state, loading: true };

    case DATA_FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case SEARCH_WORD_CHANGED:
      return { ...state, keyword: action.payLoad };

    case SEARCH_FETCH:
      return { ...state, loading: true };

    case SEARCH_FETCH_SUCCESS:
      return { ...state, loading: false, searchData: action.payload };

    default:
      return state;
  }
}