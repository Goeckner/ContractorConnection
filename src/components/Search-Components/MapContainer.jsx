import React from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import getFilteredInstructorList from '../../redux/selectors/getFilteredInstructorList'
import map from 'lodash/map'
import {setSelectedInstructor} from '../../redux/actions/setSelectedInstructor'
import {setShowInstructor} from '../../redux/actions/setShowInstructor'

const Marker = props => {
    return (
        <div onClick = {() => {props.args.setSelectedInstructor(props.instructor.id)
                               props.args.setShowInstructor(true)}}
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
        <Marker lat={inst.lat} 
                lng={inst.lng} 
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
    setShowInstructor: showi => dispatch(setShowInstructor(showi))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(MapComponent)
