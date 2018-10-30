import React from 'react'
import { connect } from 'react-redux'

const LoginContainer = props => (
	<div>
    Login Screen
  </div>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(LoginContainer)
