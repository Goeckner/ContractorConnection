import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}
