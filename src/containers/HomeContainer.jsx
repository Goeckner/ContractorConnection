import { connect } from 'react-redux'
import React from 'react'
import logo from '../logo.svg'

const HomeContainer = props => (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <h1 className="App-title">Welcome to Contractor Connection</h1>
      </header>
    </div>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(HomeContainer)
