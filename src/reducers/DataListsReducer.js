import {
  DATA_FETCH,
  DATA_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case DATA_FETCH:
      return { ...state, loading: true };

    case DATA_FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    default:
      return state;
  }
}