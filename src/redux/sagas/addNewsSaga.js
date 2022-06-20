import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../actions/api/api';
import { ADD_NEWS } from '../constants';
import { addNewsSuccess, addNewsFailure } from '../actions/actionCreator';

function* addNews({ payload }) {
  try {
    const data = yield call(api.post, '/news', payload);
    yield put(addNewsSuccess(data));
  } catch (error) {
    yield put(addNewsFailure(error.message));
  }
}

function* listenerAddNewsSaga() {
  yield takeEvery(ADD_NEWS, addNews);
}

export default listenerAddNewsSaga;
