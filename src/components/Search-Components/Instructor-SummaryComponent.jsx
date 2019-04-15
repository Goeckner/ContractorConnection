import React from 'react'
import { connect } from 'react-redux'
import {setMapAddress} from '../../redux/actions/setMapAddress'
import Rating from 'react-rating'
import {Col} from 'react-bootstrap'
import {setCoordinates} from '../../redux/actions/setCoordinates'
import {setShowInstructor} from '../../redux/actions/setShowInstructor'
import {setSelectedInstructor} from '../../redux/actions/setSelectedInstructor'

const InstructorSummary = props =>
{
    const handleClick = () => {
        props.setMapAddress(props.instructor.address)
        props.setCoordinates({center:{lat: parseFloat(props.instructor.latitude), lng: parseFloat(props.instructor.longitude)}, zoom: 15})
        props.setSelectedInstructor(props.instructor.id)
        props.setShowInstructor(true)
    }

    const handleHover = () => {
        props.setMapAddress(props.instructor.address)
        props.setCoordinates({center:{lat: parseFloat(props.instructor.latitude), lng: parseFloat(props.instructor.longitude)}, zoom: 15})
    }

    return (
        <tr >
            <td onClick={()=>{handleClick()}} onMouseOver={()=>{handleHover()}}>
                <Col xs={7}>
                    <strong>
                        <a>
                            {props.instructor.name}
                        </a>
                    </strong><br/>
                    <div>
                        {props.instructor.email}
                    </div>
                </Col>
                <Col xs = {5}>
                    <div>
                        <Rating
                            fractions = "4"
                            readonly
                            quiet
                            emptySymbol="glyphicon glyphicon-star-empty"                            
                            fullSymbol="glyphicon glyphicon-star"
                            className = "filter-regular" 
                            initialRating = {props.instructor.rating} 
                        />
                    </div>
                    <div>
                        {props.instructor.address}, {props.instructor.state}
                    </div>
                </Col>
            </td>
        </tr>
    )
}

const mapStateToProps = state => ({
    ...state.seachPage
})

const mapDispatchToProps = dispatch => ({
    setMapAddress: address => dispatch(setMapAddress(address)),
    setCoordinates: coordinates => dispatch(setCoordinates(coordinates)),
    setShowInstructor: showi => dispatch(setShowInstructor(showi)),
    setSelectedInstructor: selected => dispatch(setSelectedInstructor(selected))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorSummary)
