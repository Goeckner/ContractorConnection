import { Route, Switch } from 'react-router-dom'
import HomeContainer from './HomeContainer'
import React from 'react'

const AppContainer = () => (
  <div>
    <Switch>
      <Route component={HomeContainer} exact path="/home" />
    </Switch>
  </div>
)

export default AppContainer
