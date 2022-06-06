// import * as actions from "../actions/newsActions";
import { GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from "../constants";

export const initialState = {
  news: [],
  loading: false,
  hasErrors: false,
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        loading: true,
      };
    case GET_NEWS_SUCCESS:
      return {
        news: action.payload,
        loading: false,
        hasErrors: false,
      };
    case GET_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };
    default:
      return state;
  }
}
