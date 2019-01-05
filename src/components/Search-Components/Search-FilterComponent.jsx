import React from 'react';
import { connect } from 'react-redux'
import map from 'lodash/map'
import {FormGroup, FormControl, DropdownButton, Modal, Button, ButtonGroup, Col, Row} from 'react-bootstrap'
import {setShowFilter} from '../../redux/actions/setShowFilter'

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
                    <FormControl className = "filter-regular" type="text" placeholder="Address" />
                    </FormGroup>
                <Row className = "filter-sub-title">
                    <br />
                    Zip Code
                </Row>
                    <FormGroup className = "filter-regular">
                    <FormControl className = "filter-regular" type="text" placeholder="Zip" />
                    </FormGroup>      
            <Row className = "filter-title">
                Rating:
            </Row>
        </div>
        
    )
}

const SearchFilter = props => {
    return (
        <div style = {{width: '100%', margin: '0 auto 10px'}}>
            <Button bsSize = "large" block style = {{color: 'gray'}} onClick={() => props.setShowFilter(true)}> 
                Advanced Search
            </Button>

            <Modal show={props.showFilter} onHide={() => props.setShowFilter(false)}>
                <Col className = "filter-selection">
                    <FilterDropDown />
                </Col>
            </Modal>
        </div>        
    )
}

const mapStateToProps = state => ({
    ...state.searchPage
})

const mapDispatchToProps = dispatch => ({
	setShowFilter: show => dispatch(setShowFilter(show))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SearchFilter)