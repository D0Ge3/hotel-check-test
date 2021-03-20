import { all } from 'redux-saga/effects'
import { hotelsWatcher } from './hotelsSagas'
import { appWatcher } from './appSagas'

export function* rootSaga() {
  yield all([appWatcher(), hotelsWatcher()])
}
