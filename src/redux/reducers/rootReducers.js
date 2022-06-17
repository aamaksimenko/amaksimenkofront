import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import userReducer from './userReducer';
import userData from './userData';

const rootReducer = combineReducers({
  newsReducer,
  userReducer,
  userData,
});

export default rootReducer;
