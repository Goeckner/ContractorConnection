import React from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl, ButtonToolbar, Row, Button, Image, Col} from 'react-bootstrap'
import Rating from 'react-rating'
import {setShowInstructor} from '../../redux/actions/setShowInstructor'

const InstructorModal = props => {
    return (
        <div>
            <Row>
                <Col xs={12} md={6} className = "instructor-profile-picture">
                    <Image width = {150}
                           height = {150}
                           alt = "150x150"
                           src = {require("../../usericon.jpg")}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={10} className = "instructor-profile-name">
                    {props.instructor.name}
                </Col>
            </Row>
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