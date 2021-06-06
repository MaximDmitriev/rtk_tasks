import { all, fork, takeLatest, put, call, delay } from 'redux-saga/effects';
import { Auth } from '../actions/constants';
import { userLogin } from '../service/fetchData';
import { addMessage } from '../store/message-reducer';
import { logIn, logOut, setLoading } from '../store/user-reducer';
import { deleteCookies, getCookie, setCookies } from '../service/cookies';
import { setError } from '../store/error-reducer';

function* loginRequestListener() {
  yield takeLatest(Auth.REQUEST_USER_LOGIN, loginRequestWorker);
}

function* userLogoutListener() {
  yield takeLatest(Auth.USER_LOGOUT, userLogoutWorker);
}

function* checkTokenListener() {
  yield takeLatest(Auth.CHECK_TOKEN, checkTokenWorker);
}

function* loginRequestWorker({ payload }) {
  yield put(setLoading('pending'));
  // yield delay(3000); // для проварки условия блокировки формы
  try {
    const result = yield call(login, payload.body);
    if (result.serverError) {
      yield put(setError(result));
      yield put(setLoading('error'));
    } else if (result.error) {
      yield put(addMessage({ text: result.error.message, type: 'error' }));
      yield put(setLoading('error'));
    } else {
      yield put(logIn(result));
      setCookies('user', JSON.stringify(result));
      yield put(setLoading('authorized'));
    }
  } catch (err) {
    yield put(setLoading('error'));
    console.error(err);
  }
}

function* userLogoutWorker() {
  deleteCookies('user');
  yield put(logOut());
}

function* checkTokenWorker() {
  const user = getCookie('user');
  if (user) {
    yield put(logIn(JSON.parse(user)));
  }
}

export function* authRootSaga() {
  yield all([
    fork(loginRequestListener),
    fork(userLogoutListener),
    fork(checkTokenListener),
  ]);
}


async function login(body) {
  const res = await userLogin(body);
  if (res.ok) {
    return await res.json();
  } else {
    return {
      serverError: true,
      code: res.status,
      text: res.statusText,
    };
  }
}
