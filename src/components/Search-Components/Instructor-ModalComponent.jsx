import React from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl, ButtonToolbar, Modal, Button, ButtonGroup, Row} from 'react-bootstrap'
import Rating from 'react-rating'
import {setShowInstructor} from '../../redux/actions/setShowInstructor'

const InstructorModal = props => {
    return (
        <div>
            {props.instructor.name}
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.searchPage
})

const mapDispatchToProps = dispatch => ({
    setShowInstructor: showi => dispatch(setShowInstructor(showi))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorModal)