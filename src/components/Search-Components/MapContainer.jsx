import React from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import getFilteredInstructorList from '../../redux/selectors/getFilteredInstructorList'
import map from 'lodash/map'
import Geocode from "react-geocode";
import {setSelectedInstructor} from '../../redux/actions/setSelectedInstructor'
import {setShowInstructor} from '../../redux/actions/setShowInstructor'
import {setMapAddress} from '../../redux/actions/setMapAddress'
import {setCoordinates} from '../../redux/actions/setCoordinates'

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

const Marker = props => {
    const handleClick = () => {
        props.args.setMapAddress(props.instructor.address)
        //updateCoordinates(props.instructor.location, props.args.setCoordinates)
        props.args.setCoordinates({center:{lat: parseFloat(props.instructor.latitude), lng: parseFloat(props.instructor.longitude)}, zoom: 15})
        props.args.setSelectedInstructor(props.instructor.id)
        props.args.setShowInstructor(true)
    }

    return (
        <div onClick = {() => {handleClick()}}
             className="google-maps-marker"
        >
            <div className="marker-top">
                {props.instructor.name}
            </div>
            <div className='marker-bottom' />
        </div>
    )
}

const MapComponent = props => 
{
    const allMarkers = map(props.filteredInstructors, inst =>
        <Marker lat={parseFloat(inst.latitude)} 
                lng={parseFloat(inst.longitude)} 
                instructor={inst}
                args = {props}
        />
    )

    return (
        <div>
            <div style= {{height: '55vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                    center={props.center}
                    defaultZoom = {props.zoom}
                    //onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
                >
                    {allMarkers}
                </GoogleMapReact>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.searchPage, filteredInstructors: getFilteredInstructorList(state)
})

const mapDispatchToProps = dispatch => ({
    setSelectedInstructor: selected => dispatch(setSelectedInstructor(selected)),
    setShowInstructor: showi => dispatch(setShowInstructor(showi)),
    setMapAddress: address => dispatch(setMapAddress(address)),
    setCoordinates: coordinates => dispatch(setCoordinates(coordinates))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(MapComponent)
