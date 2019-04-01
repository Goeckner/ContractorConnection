import React from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl, ButtonToolbar, Row, Button, Image, Col} from 'react-bootstrap'
import Rating from 'react-rating'
import {setShowInstructor} from '../../redux/actions/setShowInstructor'

const InstructorModal = props => {
    return (
        <div>
            <Row>
                <Col xs={12} md={10} className = "instructor-profile-picture">
                    {props.instructor.profilePicURL ? 
                        <Image width = {150}
                            height = {150}
                            alt = "150x150"
                            src = {props.instructor.profilePicURL}
                        />
                    :
                        <Image width = {150}
                           height = {150}
                           alt = "150x150"
                           src = {require("../../usericon.jpg")}
                        />
                    }
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={10} className = "instructor-profile-name">
                    {props.instructor.name}
                </Col>
            </Row>
            <Row>
                <Col xs={7} md={6}>
                    <Col xs={4} md={3}>
                        <div>
                            Company:
                        </div>
                        <div>
                            Phone:
                        </div>
                        <div>
                            Address:
                        </div>
                        <br></br>
                        <div>
                            About Me:
                        </div>
                    </Col>
                    <Col xs={7} md={6}>
                        <div>
                            {props.instructor.company}
                        </div>
                        <div>
                            {props.instructor.phone}
                        </div>
                        <div>
                            {props.instructor.address}
                            <div>{props.instructor.city}, {props.instructor.state}</div>
                        </div>
                        <div>
                            {props.instructor.fullDesc}
                        </div>
                    </Col>
                </Col>
                <Col xs={7} md={6}>
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