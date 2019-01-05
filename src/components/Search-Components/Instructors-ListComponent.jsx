import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
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
        <div className="instructors-list-div">
            <Table hover className="instructors-list">
                <tbody>
                    {instructorCell}
                </tbody>
            </Table>
        </div>
        
    )
}

const mapStateToProps = state => ({
    filteredInstructors: getFilteredInstructorList(state),
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorsList)
