import '../HomeContainer.css'
import { connect } from 'react-redux'
import React from 'react'
{/* import logo from '../logo.svg' */}

const HomeContainer = props => (
    <div className="App">
      <header className="App-header">
        {/* <img alt="logo" className="App-logo" src={logo} /> */}
        <h1 className="App-title">Welcome to Contractor Connection!</h1>
      </header>
        <div className="Home-intro">
          <p className="intro_content">Contractor Connection is where diverse individuals can find firearm classes by instructors who have completed diversity training.  
                         We want you to feel as comfortable as possible in your self-defense journey!</p>
        </div>
        <div className="Home-intro">
          <p className="intro_content">We also provide a platform for firearm instructors to find new and excited clients who are interested to learn from them.  
                         We provide diversity training and, once completed, you or your company will begin to be displayed in the instructor search results!</p>
        </div>
    </div>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(HomeContainer)
