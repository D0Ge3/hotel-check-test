import { takeEvery, put, call } from 'redux-saga/effects'
import { nanoid } from 'nanoid'

import { setHotels, GET_HOTELS, setFilters } from '../actions/hotelsActions'
import { setIsLoading } from '../actions/appActions'
import { hotelsApi } from '../../api'

export function* hotelsWatcher() {
  yield takeEvery(GET_HOTELS, getHotels)
}

function* getHotels(args) {
  yield put(setIsLoading(true))
  const res = yield call(
    hotelsApi.getHotels,
    args.checkIn,
    args.checkOut,
    args.location
  )
  yield put(
    setFilters({
      checkIn: args.checkIn,
      checkOut: args.checkOut,
      location: args.location,
    })
  )
  yield put(
    setHotels(
      res.data.map((h) => ({
        ...h,
        check: {
          checkIn: args.checkIn,
          checkOut: args.checkOut,
          location: args.location,
        },
        id: nanoid(),
      }))
    )
  )
  yield put(setIsLoading(false))
}
