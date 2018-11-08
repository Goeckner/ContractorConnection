import React from 'react'
import { connect } from 'react-redux'
import {setMapAddress} from '../../redux/actions/setMapAddress'
import Geocode from "react-geocode";
import {Col, Row} from 'react-bootstrap'
import {setCoordinates} from '../../redux/actions/setCoordinates'

const updateCoordinates = (address, setCoordinates) =>
{
    Geocode.setApiKey("");

    Geocode.enableDebug();

    Geocode.fromAddress(address).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            setCoordinates({center:{lat: lat, lng: lng}, zoom: 19})
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
                <Col xs={9}>
                    <strong>
                        <a>
                            {props.instructor.name}
                        </a>
                    </strong><br/>
                    <span>
                        {props.instructor.email}
                    </span>
                </Col>
                <Col xs = {3}>
                    <span>
                        {props.instructor.location}
                    </span>
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
    setCoordinates: coordinates => dispatch(setCoordinates(coordinates))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(InstructorSummary)
