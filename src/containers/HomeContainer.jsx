import { connect } from 'react-redux'
import { simpleAction } from '../redux/actions/simpleAction'
import React from 'react'
import logo from '../logo.svg'
import { Panel } from 'react-bootstrap'

const HomeContainer = ({
  simpleReducer,
  simpleAction,
  }) => (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <h1 className="App-title">Welcome to Contractor Connection</h1>
      </header>
      <Panel>
        <Panel.Heading>
          <button onClick={simpleAction}>
            Test redux action
          </button>
        </Panel.Heading>
        <Panel.Body>
          {simpleReducer}
        </Panel.Body>
      </Panel>
    </div>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(HomeContainer)
