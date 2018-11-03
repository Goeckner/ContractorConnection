import React from 'react'
import { connect } from 'react-redux'
import { Table, tbody } from 'react-bootstrap'
import InstructorSummary from './Instructor-SummaryComponent'

const InstructorsList = props =>
{
    const instructorCell = props.instructorList.map((inst) =>
    {
        return (
            <InstructorSummary
                instructor = {inst}
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
    ...state.searchPage,
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorsList)
