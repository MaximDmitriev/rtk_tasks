import { all, fork } from 'redux-saga/effects';
import { authRootSaga } from './auth-sagas';

export function* rootSaga() {
  yield all([fork(authRootSaga)]);
}
