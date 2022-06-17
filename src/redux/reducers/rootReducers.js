import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import userReducer from './userReducer';
import userData from './userData';
import userNews from './userNews';

const rootReducer = combineReducers({
  newsReducer,
  userReducer,
  userData,
  userNews,
});

export default rootReducer;
