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
import SearchContainer from './SearchContainer'
import SignUpContainer from './SignUp'
import TrainingContainer from './TrainingContainer';
import { setClassList, setActiveClassList } from '../redux/actions/signUpActions'

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
              <Route component={SignUpContainer} onLeave={()=>{this.props.setClassList(this.props.signUp.activeClassList)}} exact path="/sign-up" />
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
  setClassList: classes => dispatch(setClassList(classes)),
  setActiveClassList: aclasses => dispatch(setActiveClassList(aclasses)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(App)
