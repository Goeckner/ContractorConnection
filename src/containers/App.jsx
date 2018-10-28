import '../App.css'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/Header'
import HomeContainer from './HomeContainer'
import SearchContainer from './SearchContainer'
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <ConnectedRouter history={this.props.history}>
          <div>
            <Header />
            <Switch>
              <Route component={HomeContainer} exact path="/" />
              <Route component={SearchContainer} exact path="/instructors" />
            </Switch>
          </div>
        </ConnectedRouter>
      </div>
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
