import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas/rootSaga'
import { appReducer } from './reducers/appReducer'
import { hotelsReducer } from './reducers/hotelsReducer'

const saga = createSagaMiddleware()

let reducers = combineReducers({
  app: appReducer,
  hotels: hotelsReducer,
})

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

saga.run(rootSaga)
