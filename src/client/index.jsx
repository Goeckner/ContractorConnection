import './styles/velocity-suite.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AppContainer from './containers/AppContainer'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import makeReduxStore from './redux'
import reducers from './redux/reducers'

const store = makeReduxStore(reducers)
const basename = '/contractor-connection'

ReactDOM.render(
  <Provider store={store}>
    <Router basename={basename}>
      <Route component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
