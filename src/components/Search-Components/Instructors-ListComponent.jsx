import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, tbody } from 'react-bootstrap'
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
        <Table hover className = "instructors-list">
            <tbody>
                {instructorCell}
            </tbody>
        </Table>
    )
}

const mapStateToProps = state => ({
    ...state,
})
  
const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorsList)