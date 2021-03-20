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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// eslint-disable-next-line
export const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)))

saga.run(rootSaga)
