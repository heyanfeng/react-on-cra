import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { watchAsyc } from '../modules/example01/store/sagas'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware, sagaMiddleware))
}
  

export const sagaWatch = () => sagaMiddleware.run(watchAsyc)

export default configureStore
