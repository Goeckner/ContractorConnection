import { connect } from 'react-redux'
import { simpleAction } from '../redux/actions/simpleAction'
import React from 'react'
import logo from '../logo.svg'

const HomeContainer = ({
  simpleReducer,
  simpleAction,
  }) => (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <h1 className="App-title">Welcome to Contractor Connection</h1>
      </header>
      <button onClick={simpleAction}>
        Test redux action
      </button>
      <div>
        {simpleReducer}
      </div>
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
