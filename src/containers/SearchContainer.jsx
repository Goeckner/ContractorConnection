import React from 'react'
import { connect } from 'react-redux'
import { Grid,Col,Row } from 'react-bootstrap';
import SearchBar from '../components/Search-Components/Search-BarComponent'
import InstructorsList from '../components/Search-Components/Instructors-ListComponent'
import MapContainer from '../components/Search-Components/MapContainer'
import SearchFilter from '../components/Search-Components/Search-FilterComponent'
import {setCoordinates} from '../redux/actions/setCoordinates'
import {setInstructorList} from '../redux/actions/fetchinstructors'
import fetch from 'node-fetch'

const SearchContainer = props => {

	if(props.instructorList === undefined || props.instructorList.length == 0){
		fetch("http://localhost:3001/trainers", {'Content-Type': 'application/json'})
		  	.then(res => res.json())
		  	.then(json => props.setInstructorList(json));
	}

	return (
		<Grid className="instructor-search-container" >

			<Row className="search-utils" >

				<SearchBar />

				<Col md={6} className="map-filter">
					<SearchFilter />
				</Col>
				
			</Row >

			<Row className="results-container" >

				<Col md={6} className="results-list-container" >
					<InstructorsList />
				</Col >

				<Col md={6} className="results-map-container" >
					<MapContainer 
						center = {props.Coordinates.center}
						zoom = {props.Coordinates.zoom}
					/>
				</Col >

			</Row >

		</Grid >
	)
}

const mapStateToProps = state => ({
  ...state.searchPage
})

const mapDispatchToProps = dispatch => ({
	setCoordinates: coordinates => dispatch(setCoordinates(coordinates)),
	setInstructorList: instructors => dispatch(setInstructorList(instructors)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SearchContainer)
