import {
  USER_DATA,
  USER_DATA_SUCCESS,
  USER_DATA_FAILURE,
  LOGOUT_USER,
} from '../constants';

export const initialUserDataState = {
  data: [],
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
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case USER_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        data: [],
        isAccess: false,
      };
    default:
      return state;
  }
}

export default userData;
