import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid,Col,Row } from 'react-bootstrap';
import SearchBar from '../components/Search-Components/Search-BarComponent'
import InstructorsList from '../components/Search-Components/Instructors-ListComponent'
import MapContainer from '../components/Search-Components/MapContainer'
import SearchFilter from '../components/Search-Components/Search-FilterComponent'
import {setCoordinates} from '../redux/actions/setCoordinates'
import {setInstructorList} from '../redux/actions/fetchinstructors'
import fetch from 'node-fetch'

class SearchContainer extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		fetch("http://localhost:3001/trainers", {'Content-Type': 'application/json'})
			.then(res => res.json())
			.then(json => this.props.setInstructorList(json));
	}
	
	render() {
		return (
			<Grid className="instructor-search-container" >

				<Row className="search-utils" >

					<Col md = {6}>
						<SearchBar />
					</Col>
					

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
							center = {this.props.Coordinates.center}
							zoom = {this.props.Coordinates.zoom}
						/>
					</Col >

				</Row >

			</Grid >
		)
	}
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
