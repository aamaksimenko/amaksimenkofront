import {
  POST_USER, POST_USER_SUCCESS, POST_USER_FAILURE, LOGOUT_USER,
  POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_FAILURE,
} from '../constants';

export const initialUser = {
  user: null,
  isLoading: false,
  isAccess: false,
  error: null,
};

function userReducer(state = initialUser, action = {}) {
  switch (action.type) {
    case POST_LOGIN:
    case POST_USER:
      return {
        ...state,
        isLoading: true,
        isAccess: false,
        error: null,
      };
    case POST_LOGIN_SUCCESS:
    case POST_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        isAccess: true,
        error: null,
      };
    case POST_LOGIN_FAILURE:
    case POST_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAccess: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAccess: false,
      };
    default:
      return state;
  }
}

export default userReducer;
