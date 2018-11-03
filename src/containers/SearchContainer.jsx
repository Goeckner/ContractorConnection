import React from 'react'
import { connect } from 'react-redux'
import { Grid,Col,Row } from 'react-bootstrap';
import SearchBar from '../components/Search-Components/Search-BarComponent'//Search-BarComponent from '../components/Search-Components/Search-BarComponent'
import InstructorsList from '../components/Search-Components/Instructors-ListComponent'
import MapContainer from '../components/Search-Components/MapContainer';
import Geocode from "react-geocode";

var defaultProps = {
    center: {
      lat: 41.850033,
      lng: -96.6500523
    },
    zoom: 3
  }

Geocode.setApiKey("AIzaSyBd0Bc-Mmak6eijlIANsD4iQCTRQp5J-N8");

Geocode.enableDebug();

Geocode.fromAddress("auburn").then(
	response => {
		const { lat, lng } = response.results[0].geometry.location;
		defaultProps.center = {lat, lng}
		console.log(lat, lng);
	},
	error => {
		console.error(error);
	}
);

const SearchContainer = props => (
	<Grid className="instructor-search-container" >

		<Row className="search-utils" >
			<SearchBar />
		</Row >

		<Row className="results-container" >

			<Col xs={6} className="results-list-container" >
				<InstructorsList />
			</Col >

			<Col xs={6} className="results-map-container" >
				<MapContainer 
					center = {defaultProps.center}
					zoom = {defaultProps.zoom}
				/>
			</Col >

		</Row >

	</Grid >
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SearchContainer)
