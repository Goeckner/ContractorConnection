import React from 'react'
import { connect } from 'react-redux'

const SignUpContainer = props => (
	<div>
    Sign Up Screen
  </div>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SignUpContainer)
