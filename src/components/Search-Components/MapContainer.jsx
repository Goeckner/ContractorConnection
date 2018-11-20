import React from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import getFilteredInstructorList from '../../redux/selectors/getFilteredInstructorList'
import map from 'lodash/map'

const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      })
    })
  }
  
  const apiIsLoaded = (map, maps) => {
    if (map) {
      const bounds = new maps.LatLngBounds();
      map.fitBounds(bounds);
      bindResizeListener(map, maps, bounds);
    }
  }

  const Marker = props => {
    return (
        <div className="google-maps-marker">
            <div className="marker-top">
                {props.instructor.name}
            </div>
            <div className='marker-bottom'>

            </div>
        </div>
    )
  }

const MapComponent = props => 
{
    const allMarkers = map(props.filteredInstructors, inst =>
        <Marker lat={inst.lat} lng={inst.lng} instructor={inst}/>
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
    ...state, filteredInstructors: getFilteredInstructorList(state)
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(MapComponent)
