import { POST_USER, POST_USER_SUCCESS, POST_USER_FAILURE } from '../constants';

export const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        isLoading: true,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
        error: null,
      };
    case POST_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
