import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../actions/api/api';
import { EDIT_PROFILE } from '../constants';
import { editProfileSuccess, editProfileFailure } from '../actions/actionCreator';

function* addNews({ payload }) {
  try {
    const editUser = JSON.parse(localStorage.getItem('user'));
    const data = yield call(api.post, `/users/${editUser.id}`, payload);
    yield put(editProfileSuccess(data));
  } catch (error) {
    yield put(editProfileFailure(error.message));
  }
}

function* listenerAddNewsSaga() {
  yield takeEvery(EDIT_PROFILE, addNews);
}

export default listenerAddNewsSaga;
