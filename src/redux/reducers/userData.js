import { USER_DATA, USER_DATA_SUCCESS, USER_DATA_FAILURE } from '../constants';

export const initialUserDataState = {
  user: [],
  isLoading: false,
  error: null,
};

function userData(state = initialUserDataState, action = {}) {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case USER_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default userData;
