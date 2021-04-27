import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import { Auth } from '../actions/constants';
import { userLogin } from '../service/fetchData';
import { addMessage } from '../store/message-reducer';
import { logIn } from '../store/user-reducer';
import { setCookies } from '../service/cookies';

function* loginRequestListener() {
  yield takeLatest(Auth.REQUEST_USER_LOGIN, loginRequestWorker);
}

function* loginRequestWorker({ payload }) {
  const result = yield call(login, payload.body);

  if (result.error) {
    yield put(addMessage({ text: result.error.message, type: 'error' }));
  } else {
    yield put(logIn(result));
    setCookies('user', JSON.stringify(result));
  }
}

export function* authRootSaga() {
  yield all([
    fork(loginRequestListener),
  ]);
}


async function login(body) {
  const res = await userLogin(body);
  return await res.json();
}
