import React from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'

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

const MapComponent = props => 
{
    return (
        <div>
            <div style= {{height: '55vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyCG_sIE8lwlWXSulBV_iEE4jH-QZzp3Y38'}}
                    center={props.center}
                    zoom={props.zoom}
                    onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
                >
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