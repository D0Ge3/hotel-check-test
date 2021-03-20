import { takeEvery, put } from 'redux-saga/effects'

import { setAuth, LOGIN, setIsLoading, LOGOUT } from '../actions/appActions'

export function* appWatcher() {
  yield takeEvery(LOGIN, login)
  yield takeEvery(LOGOUT, logout)
}

function* login(args) {
  yield put(setIsLoading(true))
  const res = yield localStorage.getItem('isAuth')
  if (res) {
    yield put(setAuth(true))
  } else if (args.login && args.password) {
    yield localStorage.setItem('isAuth', true)
    yield put(setAuth(true))
  }
  yield put(setIsLoading(false))
}

function* logout() {
  yield localStorage.clear()
  yield put(setAuth(false))
}
