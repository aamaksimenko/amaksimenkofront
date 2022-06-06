import { combineReducers } from "redux";

import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  posts: newsReducer,
});

export default rootReducer;
