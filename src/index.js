import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import { register } from './serviceWorker'
import App from './containers/App'
import configureStore from './store'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
)

register()
