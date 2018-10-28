import '../App.css'
import { Route, Switch } from 'react-router-dom'
import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setActivePage } from '../redux/actions/rootActions'
import HomeContainer from './HomeContainer'
import SearchContainer from './SearchContainer'
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <button onClick={() => this.props.setActivePage('instructors')}>
              Instructor Page
            </button>
            <button onClick={() => this.props.setActivePage('home')}>
              Home Page
            </button>
          </Panel.Heading>
          <Panel.Body>
            {this.props.activePage}
          </Panel.Body>
        </Panel>
        <Switch>
          <Route component={HomeContainer} exact path="/" />
          <Route component={SearchContainer} exact path="/instructors" />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  setActivePage: page => dispatch(setActivePage(page)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(App)
