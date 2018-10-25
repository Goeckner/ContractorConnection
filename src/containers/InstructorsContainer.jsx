import React from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'

const InstructorsContainer = props => (
  <div className="App">
    <header className="App-header">
      <img alt="logo" className="App-logo" src={logo} />
      <h1 className="App-title">This is the Instructor List</h1>
    </header>
  </div>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorsContainer)
