import { all } from 'redux-saga/effects'
import { hotelsWatcher } from './hotelsSagas'

export function* rootSaga() {
  yield all([hotelsWatcher()])
}
