import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom"
import configureStore from './store';
import './index.css';
import App from './containers/App';
import { register } from './serviceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
        <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);

register();
