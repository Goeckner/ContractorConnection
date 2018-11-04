import React from 'react'
import { connect } from 'react-redux'
import {setMapAddress} from '../../redux/actions/setMapAddress'
import Geocode from "react-geocode";
import {setCoordinates} from '../../redux/actions/setCoordinates'

const updateCoordinates = (address, setCoordinates) =>
{
    Geocode.setApiKey("AIzaSyBd0Bc-Mmak6eijlIANsD4iQCTRQp5J-N8");

    Geocode.enableDebug();

    Geocode.fromAddress(address).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            setCoordinates({center:{lat: lat, lng: lng}, zoom: 10})
            console.log(lat, lng)
        },
        error => {
            console.error(error);
        }
    );
}

const InstructorSummary = props =>
{
    return (
        <tr onClick={()=>{props.setMapAddress(props.instructor.location)
                          updateCoordinates(props.instructor.location, props.setCoordinates)
                          }}>
            <td>
                <strong>
                    {props.instructor.name}
                </strong><br/>
                <span>
                    {props.instructor.email}
                </span>
            </td>
        </tr>
    )
}

const mapStateToProps = state => ({
    ...state.seachPage
})

const mapDispatchToProps = dispatch => ({
    setMapAddress: address => dispatch(setMapAddress(address)),
    setCoordinates: coordinates => dispatch(setCoordinates(coordinates))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorSummary)
