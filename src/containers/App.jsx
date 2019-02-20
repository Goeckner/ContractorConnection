import 'bootstrap/dist/css/bootstrap.css'
import '../styles/appStyles.css'
import '../App.css'
import { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react/index'
import Header from '../components/Header'
import HomeContainer from './HomeContainer'
import LoginContainer from './Login'
import SearchContainer from './SearchContainer'
import SignUpContainer from './SignUp'
import TrainingContainer from './TrainingContainer';

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <div>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <Switch>
              <Route component={HomeContainer} exact path="/" />
              <Route component={SearchContainer} exact path="/instructors" />
              <Route component={TrainingContainer} exact path="/training" />
              <Route component={LoginContainer} exact path="/login" />
              <Route component={SignUpContainer} exact path="/sign-up" />
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
