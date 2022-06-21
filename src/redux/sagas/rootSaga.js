import { all } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import userSaga from './userSaga';
import logInSaga from './logInSaga';
import userDataSaga from './userDataSaga';
import addNewsSaga from './addNewsSaga';

export default function* rootSaga() {
  yield all([
    newsSaga(),
    userSaga(),
    logInSaga(),
    userDataSaga(),
    addNewsSaga(),
  ]);
}
