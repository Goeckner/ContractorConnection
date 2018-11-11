import React from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import dotenv from 'dotenv';

dotenv.config();

const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };
  
  const apiIsLoaded = (map, maps) => {
    if (map) {
      const bounds = new maps.LatLngBounds();
      map.fitBounds(bounds);
      bindResizeListener(map, maps, bounds);
    }
  };

  const Marker = props => {
    return <div className="SuperAwesomePin"></div>
  }

const MapComponent = props => 
{
    return (
        <div>
            <div style= {{height: '55vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.GOOGLE_MAPS_API_KEY}}
                    center={props.center}
                    defaultZoom = {props.zoom}
                    //onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
                >
                    <Marker lat={props.center.lat} lng={props.center.lng} />
                </GoogleMapReact>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(MapComponent)
