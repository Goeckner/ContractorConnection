import React, { Component } from 'react';
import { connect } from 'react-redux'

const InstructorSummary = props =>
{
    return (
        <li>
            {props.instructor.name}
        </li>
    )
}

const mapStateToProps = state => ({
    ...state,
})
  
const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorSummary)