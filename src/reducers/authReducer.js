import isEmpty from '../utils/isEmpty';
import { SET_USER, LOAD_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload
      };
    case LOAD_USER:
      return {
        ...state,
        loading: payload
      };
    default:
      return state;
  }
};
