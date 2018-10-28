import React from 'react'
import { connect } from 'react-redux'
import { Grid,Clearfix,Col,Row } from 'react-bootstrap';
import SearchBar from '../components/Search-Components/Search-BarComponent'//Search-BarComponent from '../components/Search-Components/Search-BarComponent'
import InstructorsList from '../components/Search-Components/Instructors-ListComponent'

const SearchContainer = props => (
	<Grid className="instructor-search-container" >

		<Row className="search-utils" >
			<SearchBar />
		</Row >

		<Row className="results-container" >

			<Col className="results-list-container" >
				<InstructorsList />
			</Col >

			<Col className="results-map-container" >
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
