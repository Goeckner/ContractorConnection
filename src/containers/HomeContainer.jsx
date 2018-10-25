import React from 'react'
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { simpleAction } from '../actions/simpleAction'

const HomeContainer = props => (
  <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to Contractor Connection</h1>
    </header>
    <button onClick={props.simpleAction}>Test redux action</button>
   </div>
)

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => {
  return {
    simpleAction: () => dispatch(simpleAction())
  }
}

 const withConnect = connect(mapStateToProps, mapDispatchToProps)

 export default withConnect(HomeContainer);
