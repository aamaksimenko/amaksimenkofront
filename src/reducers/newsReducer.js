import * as actions from "../actions/newsActions";

export const initialState = {
  news: [],
  loading: false,
  hasErrors: false,
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_NEWS:
      return { ...state, loading: true };
    case actions.GET_NEWS_SUCCESS:
      return { news: action.payload, loading: false, hasErrors: false };
    case actions.GET_NEWS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
