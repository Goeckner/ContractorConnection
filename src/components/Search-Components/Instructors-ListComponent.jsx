import React, { Component } from 'react';
import { connect } from 'react-redux'
import InstructorSummary from './Instructor-SummaryComponent'

const InstructorsList = props => 
{
    const instructorCell = props.instructors.map((instructor) =>
    {
        return (
            <InstructorSummary
                instructor = {instructor}
            />
        )
    })

    return (
        <div className = "instructors-list">
            <ul>
                {instructorCell}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state,
})
  
const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorsList)