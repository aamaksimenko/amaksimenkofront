import { put, takeEvery } from 'redux-saga/effects';

// import api from '../actions/api/api';
import { getNews } from '../actions/api/api';
import { GET_NEWS } from '../constants';
import { getNewsSuccess, getNewsFailure } from '../actions/actionCreator';

function* getAllNews() {
  try {
    // const { data } = yield call(api.get, '/news');
    const { data } = yield getNews();
    yield put(getNewsSuccess(data));
  } catch (error) {
    yield put(getNewsFailure());
  }
}
function* listenerNewsSaga() {
  yield takeEvery(GET_NEWS, getAllNews);
}
export default listenerNewsSaga;
