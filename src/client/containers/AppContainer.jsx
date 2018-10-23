import '../styles/containers/AppContainerStyles.css'
import { Route, Switch } from 'react-router-dom'
import HomeContainer from './HomeContainer'
import OtherContainer from './OtherContainer'
import React from 'react'


const AppContainer = () => (
  <Switch>
    <Route component={HomeContainer} exact path='/' />
    <Route component={OtherContainer} exact path='/other' />
  </Switch>
)

export default AppContainer
