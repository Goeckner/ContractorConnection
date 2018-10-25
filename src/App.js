import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeContainer from './containers/HomeContainer'
import './App.css';

class App extends Component {
 render() {
  return (
    <HomeContainer></HomeContainer>
  );
 }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

 export default withConnect(App)
