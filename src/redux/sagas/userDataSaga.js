import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../actions/api/api';
import { USER_DATA } from '../constants';
import { userDataSuccess, userDataFailure } from '../actions/actionCreator';

function* getUserData() {
  try {
    const { data } = yield call(api.get, '/profile');
    yield put(userDataSuccess(data));
  } catch (error) {
    yield put(userDataFailure(error));
  }
}
function* listenerUserDataSaga() {
  yield takeEvery(USER_DATA, getUserData);
}
export default listenerUserDataSaga;
