import { put, takeEvery } from 'redux-saga/effects';

// import api from '../actions/api/api';
import { addNewsAxios } from '../actions/api/api';
import { ADD_NEWS } from '../constants';
import { addNewsSuccess, addNewsFailure } from '../actions/actionCreator';

function* addNews({ payload }) {
  try {
    // const data = yield call(api.post, '/news', payload, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
    const data = yield addNewsAxios(payload);
    yield put(addNewsSuccess(data));
  } catch (error) {
    yield put(addNewsFailure(error.message));
  }
}

function* listenerAddNewsSaga() {
  yield takeEvery(ADD_NEWS, addNews);
}

export default listenerAddNewsSaga;
