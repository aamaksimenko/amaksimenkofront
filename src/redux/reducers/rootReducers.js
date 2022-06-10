import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import userReducer from './userReducer';
import logInReducer from './logInReducer';

const rootReducer = combineReducers({
  newsReducer,
  userReducer,
  logInReducer,
});

export default rootReducer;
