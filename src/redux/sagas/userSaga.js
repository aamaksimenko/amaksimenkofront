import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../actions/api/api';
import { POST_USER } from '../constants';
import { postUserSuccess, postUserFailure } from '../actions/actionCreator';

function* regUser(name, email, password, passwordConfirmation) {
  try {
    const { data } = yield call(api.post, '/users', {
      user: {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    });
    yield put(postUserSuccess(data));
  } catch (error) {
    yield put(postUserFailure());
  }
}
function* listenerUserSaga() {
  yield takeEvery(POST_USER, regUser);
}
export default listenerUserSaga;
