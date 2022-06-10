import { all, call } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import userSaga from './userSaga';
import logInSaga from './logInSaga';

export default function* rootSaga() {
  yield all([
    call(newsSaga),
    call(userSaga),
    call(logInSaga),
  ]);
}
