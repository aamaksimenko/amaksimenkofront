import { POST_USER, POST_USER_SUCCESS, POST_USER_FAILURE } from '../constants';

export const initialUserState = {
  user: [],
  isLoading: false,
  error: null,
};

function userReducer(state = initialUserState, action = {}) {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: true,
        error: null,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
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
