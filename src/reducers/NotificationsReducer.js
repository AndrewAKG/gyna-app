import {
  NOTIFICATIONS_FETCH,
  NOTIFICATIONS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  notifications: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case NOTIFICATIONS_FETCH:
      return { ...state, loading: true };

    case NOTIFICATIONS_FETCH_SUCCESS:
      return { ...state, loading: false, notifications: action.payload };

    default:
      return state;
  }
}