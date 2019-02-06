import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import { register } from './serviceWorker'
import App from './containers/App'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'
require('dotenv').config({path: '../'})

const history = createBrowserHistory()

export default function configureStore() {
  return createStore(
    connectRouter(history)(rootReducer),
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  )
}


ReactDOM.render(
  <Provider store={configureStore()}>
    <App history={history}/>
  </Provider>,

  document.getElementById('root')
)

register()
