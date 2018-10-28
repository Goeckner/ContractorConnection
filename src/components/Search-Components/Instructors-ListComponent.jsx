import React, { Component } from 'react';
import { connect } from 'react-redux'

const InstructorsList = props => (
    <div className = "instructors-list">

    </div>
)

const mapStateToProps = state => ({
    ...state,
})
  
const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorsList)