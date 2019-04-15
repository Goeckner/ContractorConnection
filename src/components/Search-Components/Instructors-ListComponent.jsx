import React from 'react'
import { connect } from 'react-redux'
import { Table, Modal, Button } from 'react-bootstrap'
import InstructorSummary from './Instructor-SummaryComponent'
import getFilteredInstructorList from '../../redux/selectors/getFilteredInstructorList'
import InstructorModal from './Instructor-ModalComponent'
import map from 'lodash/map'
import {setShowInstructor} from '../../redux/actions/setShowInstructor'
import {setActiveFilter} from '../../redux/actions/setActiveFilter'
import {setTempFilter} from '../../redux/actions/setTempFilter'
import {setInstructorList} from '../../redux/actions/fetchinstructors'

const InstructorsList = props =>
{
    const instructorCell = map(props.filteredInstructors, inst =>
      <InstructorSummary
          instructor = {inst}
      />
    )

    const resetFilters = () => {
        props.setActiveFilter({
            distance: "No Max",
            location: "",
            rating: 0
        })

        props.setTempFilter({
            distance: "No Max",
            location: "",
            rating: 0
        })

        const body = 
        {
            rating: 0,
            latitude: new String(0),
            longitude: new String(0),
            dist: "No Max"
        }

        fetch('http://localhost:3001/trainers/filter', {
            method: 'post',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => props.setInstructorList(json));
    }

    return (
        <div className="instructors-list-div">
        {(props.activeFilter.rating && props.activeFilter.rating != 0) || (props.activeFilter.distance && props.activeFilter.distance != "No Max") ?
        <Button
            style={{margin: "0px 0px 8px 0px", color: "white", width: "100%", fontSize: "18px"}}
            bsStyle="primary"
            onClick={() => 
                resetFilters()
            }
        >Clear Filters</Button>
        : null
        }
            <Table hover className="instructors-list">
                <tbody>
                    {instructorCell}                    
                </tbody>
            </Table>
            <Modal show = {props.showInstructor} 
                   onHide = {() => props.setShowInstructor(false)}
                   bsSize = "large">
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
    setActiveFilter: active => dispatch(setActiveFilter(active)),
    setShowInstructor: showi => dispatch(setShowInstructor(showi)),
    setTempFilter: temp => dispatch(setTempFilter(temp)),
    setInstructorList: instructors => dispatch(setInstructorList(instructors)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorsList)
