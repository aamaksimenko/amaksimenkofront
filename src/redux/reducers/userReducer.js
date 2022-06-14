import {
  POST_USER, POST_USER_SUCCESS, POST_USER_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../constants';

export const initialUser = {
  user: null,
  isLoading: false,
  isToken: false,
  error: null,
};

function userReducer(state = initialUser, action = {}) {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        isLoading: true,
        isToken: false,
        error: null,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isToken: true,
        error: null,
      };
    case POST_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isToken: false,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: false,
        error: action.payload,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: true,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
