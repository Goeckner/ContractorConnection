import React from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl, ButtonToolbar, Row, Button, Image, Col} from 'react-bootstrap'
import Rating from 'react-rating'
import {setShowInstructor} from '../../redux/actions/setShowInstructor'

const InstructorModal = props => {
    return (
        <div>
            <Row>
                <Col xs={6} md={5}/>
                <Col xs={6} md={5}>
                    <Image width = {100} 
                        height = {100} 
                        alt = "100x100" 
                        src = {require("../../usericon.jpg")}
                    />
                </Col>
            </Row>
            <Row>
                
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