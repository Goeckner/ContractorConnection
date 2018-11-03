import React from 'react'
import { connect } from 'react-redux'
import { Grid,Col,Row } from 'react-bootstrap';
import SearchBar from '../components/Search-Components/Search-BarComponent'//Search-BarComponent from '../components/Search-Components/Search-BarComponent'
import InstructorsList from '../components/Search-Components/Instructors-ListComponent'
import MapContainer from '../components/Search-Components/MapContainer';

const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }

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
