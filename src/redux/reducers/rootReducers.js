import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import userReducer from './userReducer';
import userData from './userData';
import addNewsReducer from './addNewsReducer';

const rootReducer = combineReducers({
  newsReducer,
  userReducer,
  userData,
  addNewsReducer,
});

export default rootReducer;
