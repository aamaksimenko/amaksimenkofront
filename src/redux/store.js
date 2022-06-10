import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import reducer from './reducers/rootReducers';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeEnchancers(applyMiddleware(sagaMiddleware)),
);
console.log('store');
sagaMiddleware.run(rootSaga);
console.log('end');
export default store;
