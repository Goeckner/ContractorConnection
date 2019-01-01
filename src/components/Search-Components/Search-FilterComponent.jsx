import React from 'react';
import { connect } from 'react-redux'
import map from 'lodash/map'
import {FormGroup, FormControl, DropdownButton, Dropdown, ButtonGroup, Col, Row} from 'react-bootstrap'

const FilterDropDown = props => {
    return (
        <div> 
            <Row className = "filter-title">
                Location:
            </Row>
                <Row className = "filter-sub-title">
                    Distance
                </Row>
                    <Row className = "filter-regular">
                        Maximum Distance in Miles
                    </Row>
                    <FormGroup className = "filter-regular">
                    <FormControl componentClass="select" placeholder="No Max">
                        <option value="No Max">No Max</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </FormControl>
                    </FormGroup>
                    <Row className = "filter-regular">
                        From
                    </Row>
                    <FormGroup className = "filter-regular">
                    <FormControl onClick = {(e) => {e.preventDefault()
                                                    e.stopPropagation()
                                                    document.getElementById("filter-dropdown").setAttribute("aria-expanded", "true")
                        }} className = "filter-regular" type="text" placeholder="Address" />
                    </FormGroup>                    
            <Row className = "filter-title">
                Rating:
            </Row>
        </div>
        
    )
}

const SearchFilter = props => {
    return (
        <ButtonGroup justified>
            <DropdownButton           
                bsSize="large"
                title = "Advanced Search"
                id = "filter-dropdown"
            >
                <Col className = "filter-selection">
                    <FilterDropDown />
                </Col>
            </DropdownButton>
        </ButtonGroup>
        
    )
}

const mapStateToProps = state => ({
    ...state.searchPage
})

const mapDispatchToProps = dispatch => ({
	
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SearchFilter)