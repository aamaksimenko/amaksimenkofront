import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../actions/api/api';
import { POST_USER } from '../constants';
import { getNewsSuccess, getNewsFailure } from '../actions/newsActions';

function* regUserNews() {
  try {
    const { data } = yield call(api.post, '/news', {
      user: {
        name: 'Andrew',
        login: 'andrew_one',
        email: 'amaksimenko@dunice2.net',
        password: 'password',
        password_confirmation: 'password',
      },
    });
    yield put(getNewsSuccess(data));
  } catch (error) {
    yield put(getNewsFailure());
  }
}
function* listenerNewsSaga() {
  yield takeEvery(POST_USER, regUserNews);
}
export default listenerNewsSaga;
