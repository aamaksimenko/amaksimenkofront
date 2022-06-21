import {
  ADD_NEWS,
  ADD_NEWS_SUCCESS,
  ADD_NEWS_FAILURE,
} from '../constants';

export const initialUser = {
  news: null,
  isLoading: false,
  isAccess: Boolean(localStorage.getItem('token')),
  error: null,
};

function addNewsReducer(state = initialUser, action = {}) {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state,
        news: action.payload,
        isLoading: true,
        isAccess: false,
        error: null,
      };
    case ADD_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
        isAccess: true,
        error: null,
      };
    case ADD_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAccess: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default addNewsReducer;
