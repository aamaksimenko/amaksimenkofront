import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import userReducer from './userReducer';
import userData from './userData';
import addNewsReducer from './addNewsReducer';
import editProfileReducer from './editProfileReducer';

const rootReducer = combineReducers({
  newsReducer,
  userReducer,
  userData,
  addNewsReducer,
  editProfileReducer,
});

export default rootReducer;
