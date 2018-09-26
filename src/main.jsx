import 'babel-polyfill'
import 'raf/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

const app = (
  <h1>
    Hello World
  </h1>
)

ReactDOM.render(app, document.getElementById('app'))
