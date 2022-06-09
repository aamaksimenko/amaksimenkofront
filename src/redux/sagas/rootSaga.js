// import { all, call } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield newsSaga();
  yield userSaga();
}
