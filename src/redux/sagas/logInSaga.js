import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../actions/api/api';
import { POST_LOGIN } from '../constants';
import { postLogInSuccess, postLogInFailure } from '../actions/actionCreator';

function* logInUser({ payload }) {
  try {
    const data = yield call(api.post, '/users/sign_in', { user: payload });
    yield put(postLogInSuccess(data.data));
    localStorage.setItem('user', JSON.stringify(data.data.user));
    localStorage.setItem('token', data.headers.authorization);
  } catch (error) {
    yield put(postLogInFailure(error.response.data));
  }
}
function* listenerLogInUserSaga() {
  yield takeEvery(POST_LOGIN, logInUser);
}
export default listenerLogInUserSaga;
