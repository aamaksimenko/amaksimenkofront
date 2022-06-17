import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../actions/api/api';
import { USER_NEWS } from '../constants';
import { userNewsSuccess, userNewsFailure } from '../actions/actionCreator';

function* getUserNews() {
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    };
    const data = yield call(api.get, '/profile/news', config);
    yield put(userNewsSuccess(data.data));
  } catch (error) {
    yield put(userNewsFailure(error));
  }
}
function* listenerUserNewsSaga() {
  yield takeEvery(USER_NEWS, getUserNews);
}
export default listenerUserNewsSaga;
