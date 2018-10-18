import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AppContainer from './containers/AppContainer'
import React from 'react'
import ReactDOM from 'react-dom'
import makeReduxStore from './redux'
import reducers from './redux/reducers'
// import 'babel-polyfill'
// import 'raf/polyfill'


async function startup() {
  const store = makeReduxStore(reducers)
  const basename = '/contractorConnection'

  ReactDOM.render(
    <Provider store={store}>
      <Router basename={basename}>
        <Route component={AppContainer} />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

startup()
