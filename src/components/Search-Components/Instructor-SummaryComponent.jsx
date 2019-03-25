import React from 'react'
import { connect } from 'react-redux'
import {setMapAddress} from '../../redux/actions/setMapAddress'
import Rating from 'react-rating'
import Geocode from "react-geocode";
import {Col} from 'react-bootstrap'
import {setCoordinates} from '../../redux/actions/setCoordinates'
import {setShowInstructor} from '../../redux/actions/setShowInstructor'
import {setSelectedInstructor} from '../../redux/actions/setSelectedInstructor'

const updateCoordinates = (address, setCoordinates) =>
{
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

    Geocode.enableDebug();

    Geocode.fromAddress(address).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            setCoordinates({center:{lat: lat, lng: lng}, zoom: 15})
            console.log(lat, lng)
        },
        error => {
            console.error(error);
        }
    );
}

const InstructorSummary = props =>
{
    const handleClick = () => {
        props.setMapAddress(props.instructor.address)
        //updateCoordinates(props.instructor.address, props.setCoordinates)
        props.setCoordinates({center:{lat: parseFloat(props.instructor.latitude), lng: parseFloat(props.instructor.longitude)}, zoom: 15})
        props.setSelectedInstructor(props.instructor.id)
        props.setShowInstructor(true)
    }

    return (
        <tr >
            <td onClick={()=>{handleClick()}}>
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
