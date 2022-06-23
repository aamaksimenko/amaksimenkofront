import {
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
} from '../constants';

export const initialEditProfile = {
  user: [],
  isLoading: false,
  isAccess: Boolean(localStorage.getItem('token')),
  error: null,
};

function editProfileReducer(state = initialEditProfile, action = {}) {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        user: action.payload,
        isLoading: true,
        isAccess: false,
        error: null,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAccess: true,
        error: null,
      };
    case EDIT_PROFILE_FAILURE:
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

export default editProfileReducer;
