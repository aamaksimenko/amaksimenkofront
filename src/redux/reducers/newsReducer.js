import { GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from '../constants';

export const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
        error: null,
      };
    case GET_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default newsReducer;
