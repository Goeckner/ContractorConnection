import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import HomeContainer from './HomeContainer'
import '../App.css';

class App extends Component {
 render() {
  return (
      <Switch>
        <Route path="/" exact component={HomeContainer} />
      </Switch>
  );
 }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

 export default withConnect(App)
