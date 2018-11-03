import React from 'react'
import { connect } from 'react-redux'
import { Table, tbody } from 'react-bootstrap'
import InstructorSummary from './Instructor-SummaryComponent'
import getFilteredInstructorList from '../../redux/selectors/getFilteredInstructorList'
import map from 'lodash/map'

const InstructorsList = props =>
{
    const instructorCell = map(props.filteredInstructors, inst =>
      <InstructorSummary
          instructor = {inst}
      />
    )

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
    filteredInstructors: getFilteredInstructorList(state),
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorsList)
