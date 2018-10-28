import { connect } from 'react-redux'
import { setActivePage } from '../redux/actions/rootActions'
import React from 'react'
import logo from '../logo.svg'
import { Panel } from 'react-bootstrap'

const HomeContainer = props => (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <h1 className="App-title">Welcome to Contractor Connection</h1>
      </header>
      <Panel>
        <Panel.Heading>
          <button onClick={() => props.setActivePage('instructors')}>
            Instructor Page
          </button>
          <button onClick={() => props.setActivePage('home')}>
            Home Page
          </button>
        </Panel.Heading>
        <Panel.Body>
          {props.activePage}
        </Panel.Body>
      </Panel>
    </div>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  setActivePage: page => dispatch(setActivePage(page)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(HomeContainer)
