import {
  POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../constants';

export const initialLogIn = {
  log_in: null,
  isLoading: false,
  token: false,
  error: null,
};

function logInReducer(state = initialLogIn, action = {}) {
  switch (action.type) {
    case POST_LOGIN:
      return {
        ...state,
        isLoading: true,
        token: false,
        error: null,
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        token: true,
        error: null,
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: false,
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

export default logInReducer;
