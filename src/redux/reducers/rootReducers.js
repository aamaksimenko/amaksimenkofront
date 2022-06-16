import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  newsReducer,
  userReducer,
});

export default rootReducer;
