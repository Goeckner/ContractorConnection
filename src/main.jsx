import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import React from 'react'
import ReactDOM from 'react-dom'
import makeReduxStore from './redux'
import reducers from './redux/reducers'
import 'babel-polyfill'
import 'raf/polyfill'

async function startup() {
  const store = makeReduxStore(reducers)

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route component={HomeContainer} exact path="/home" />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

startup()
