import { applyMiddleware, createStore } from 'redux'
import middlewares, { runSagas } from './middleware'
import reducers from './reducers'

const makeReduxStore = () => {
  const store = createStore(reducers, applyMiddleware(...middlewares))

  runSagas()

  return store
}

export default makeReduxStore
