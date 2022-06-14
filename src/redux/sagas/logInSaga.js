import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../actions/api/api';
import { POST_LOGIN } from '../constants';
import { postLogInSuccess, postLogInFailure } from '../actions/actionCreator';

function* logInUser(action) {
  try {
    const data = yield call(api.post, '/users/sign_in', action.payload);
    yield put(postLogInSuccess(data));
    localStorage.setItem('token', data.headers.authorization);
  } catch (error) {
    yield put(postLogInFailure());
  }
}
function* listenerLogInUserSaga() {
  yield takeEvery(POST_LOGIN, logInUser);
}
export default listenerLogInUserSaga;
