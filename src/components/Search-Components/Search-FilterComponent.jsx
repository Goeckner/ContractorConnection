import React from 'react';
import { connect } from 'react-redux'
import map from 'lodash/map'
import {DropdownButton, ButtonGroup, Col, Row} from 'react-bootstrap'

const FilterDropDown = props => {
    return (
        <div>
            <Row className = "filter-title">
                Location:
            </Row>
            <Row>
                
            </Row>
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