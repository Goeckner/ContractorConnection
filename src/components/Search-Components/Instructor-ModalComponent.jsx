import React from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl, ButtonToolbar, Row, Button, Image, Col} from 'react-bootstrap'
import Rating from 'react-rating'
import {setShowInstructor} from '../../redux/actions/setShowInstructor'
import {setClassList} from '../../redux/actions/setClassList'
import map from 'lodash.map'


const InstructorModal = props => {

    const setClassList = () => {
        fetch(`http://localhost:3001/classes/${props.instructor.id}`, {
                method: 'get',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(json => props.setClassList(json));
    }

    const courseList = classes => {
        return (
            map(classes, course => {
                return (
                    <div key={course.className}>
                        <div>
                            {course.className}
                        </div>
                        <textarea readOnly style={{width: "100%", height: "10em", overflow: "scroll"}} value={course.classDesc} />
                    </div>
                )
            })
        )
    }

    const rateInstructor = rating => {

        const body = {
            id: props.instructor.id,
            rate: rating
        }

        fetch('http://localhost:3001/trainers/rating', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body
        })
    }

    return (
        <div>
            {props.classes ? null : setClassList()}
            <Row>
                <Col xs={12} md={10} className = "instructor-profile-picture">
                    Rate this instructor:
                    <Rating
                        emptySymbol="glyphicon glyphicon-star-empty"                            
                        fullSymbol="glyphicon glyphicon-star"
                        className = "filter-modal"
                        onClick = {rating => rateInstructor(rating)}
                        initialRating = {props.instructor.rating} 
                    />
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
                    </Col>
                    <Col xs={8} md={8}>
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
                    </Col>
                    <div>
                        About Me:
                    </div>
                    <textarea readOnly style={{width: "100%", height: "10em", overflow: "scroll"}} value={props.instructor.fullDesc} />
                </Col>
                <Col xs={7} md={6}>
                    <div>
                        Courses:
                    </div>
                    <br />
                    { props.classes ? courseList(props.classes) : null}
                </Col>
            </Row>
            
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.searchPage
})

const mapDispatchToProps = dispatch => ({
    setShowInstructor: showi => dispatch(setShowInstructor(showi)),
    setClassList: classes => dispatch(setClassList(classes))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorModal)