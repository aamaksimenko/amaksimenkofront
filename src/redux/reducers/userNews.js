import { USER_NEWS, USER_NEWS_SUCCESS, USER_NEWS_FAILURE } from '../constants';

export const initialUserNewsState = {
  news: [],
  isLoading: false,
  error: null,
};

function userNews(state = initialUserNewsState, action = {}) {
  switch (action.type) {
    case USER_NEWS:
      return {
        ...state,
        isLoading: true,
      };
    case USER_NEWS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case USER_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default userNews;
