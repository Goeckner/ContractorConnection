import React from 'react'
import { connect } from 'react-redux'
import { Table, Modal } from 'react-bootstrap'
import InstructorSummary from './Instructor-SummaryComponent'
import getFilteredInstructorList from '../../redux/selectors/getFilteredInstructorList'
import InstructorModal from './Instructor-ModalComponent'
import map from 'lodash/map'
import {setShowInstructor} from '../../redux/actions/setShowInstructor'

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
            <Modal show = {props.showInstructor} 
                   onHide = {() => props.setShowInstructor(false)}>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <InstructorModal instructor = {props.filteredInstructors.find(o => o.id === props.selectedInstructor)}/>
                </Modal.Body>
            </Modal>
        </div>
        
    )
}

const mapStateToProps = state => ({
    filteredInstructors: getFilteredInstructorList(state),
    ...state.searchPage
})

const mapDispatchToProps = dispatch => ({
    setShowInstructor: showi => dispatch(setShowInstructor(showi))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorsList)
