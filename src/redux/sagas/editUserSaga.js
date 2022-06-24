import { put, takeEvery } from 'redux-saga/effects';

// import api from '../actions/api/api';
import { editUser } from '../actions/api/api';
import { EDIT_PROFILE } from '../constants';
import { editProfileSuccess, editProfileFailure } from '../actions/actionCreator';

function* editProfile({ payload }) {
  try {
    // const editUser = JSON.parse(localStorage.getItem('user'));
    // const { data } = yield call(api.patch, `/users/${Number(editUser.id)}`, payload);
    const { data } = yield editUser(payload);
    localStorage.setItem('user', JSON.stringify(data));
    yield put(editProfileSuccess(data));
  } catch (error) {
    yield put(editProfileFailure(error.message));
  }
}

function* listenerEditUserSaga() {
  yield takeEvery(EDIT_PROFILE, editProfile);
}

export default listenerEditUserSaga;
