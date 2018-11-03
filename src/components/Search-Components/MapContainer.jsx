import React from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react'

const MapComponent = props => 
{
    return (
        <div>
            <div style= {{height: '55vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyCG_sIE8lwlWXSulBV_iEE4jH-QZzp3Y38'}}
                    defaultCenter={props.center}
                    defaultZoom={props.zoom}
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