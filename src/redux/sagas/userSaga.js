import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../actions/api/api';
import { POST_USER } from '../constants';
import { postUserSuccess, postUserFailure } from '../actions/actionCreator';

function* registrationUser({ payload }) {
  try {
    const data = yield call(api.post, '/users', { user: payload });
    yield put(postUserSuccess(data.data));
    localStorage.setItem('user', JSON.stringify(data.data.user));
    localStorage.setItem('token', data.headers.authorization);
  } catch (error) {
    yield put(postUserFailure(error.message));
  }
}

function* listenerUserSaga() {
  yield takeEvery(POST_USER, registrationUser);
}

export default listenerUserSaga;
