import '../App.css'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import HomeContainer from './HomeContainer'
import InstructorsContainer from './InstructorsContainer'
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route component={HomeContainer} exact path="/" />
        <Route component={InstructorsContainer} exact path="/instructors" />
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(App)
