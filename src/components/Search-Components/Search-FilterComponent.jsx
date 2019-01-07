import React from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl, ButtonToolbar, Modal, Button, ButtonGroup, Row} from 'react-bootstrap'
import Rating from 'react-rating'
import {setShowFilter} from '../../redux/actions/setShowFilter'
import {setTempFilter} from '../../redux/actions/setTempFilter'

const SearchFilter = props => {
    
    const changeTempRating = (rate) => {
        props.setTempFilter({
            distance: props.tempFilter.distance,
            location: props.tempFilter.location,
            rating: rate
        })
    }
    
    const changeTempDistance = (dist) => {
        props.setTempFilter({
            distance: dist,
            location: props.tempFilter.location,
            rating: props.tempFilter.rating
        })
    }

    const cheangeTempLoc = (loc) => {
        props.setTempFilter({
            distance: props.tempFilter.distance,
            location: loc,
            rating: props.tempFilter.rating
        })
    }
    
    const handleCancel = () => {
    
        props.setShowFilter(false)
    }
    
    const handleAccpect = () => {
    
        props.setShowFilter(false)
    }
    
    const FilterDropDown = () => {
        return (
            <div> 
                <Row className = "filter-title">
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
                    <br />
                <Row className = "filter-title">
                    Rating:
                </Row>
                    <Row className = "filter-regular">
                        Minimum Instructor Rating
                    </Row>
                    <Rating onChange = {(value) => changeTempRating(value)} className = "filter-regular" initialRating = {props.tempFilter.rating} stop = {5}/>
                    <br />
                    <ButtonGroup className = "filter-regular">
                        {/* TODO: Connect this button, and the Rating component itself to a reducer */}
                        <Button bsSize = "small">Reset</Button>
                    </ButtonGroup>
            </div>
        )
    }

    return (
        <div style = {{width: '100%', margin: '0 auto 10px'}}>
            <Button bsSize = "large" block style = {{color: 'gray'}} onClick={() => props.setShowFilter(true)}>
                Advanced Search
            </Button>

            <Modal show={props.showFilter} onHide={() => props.setShowFilter(false)}>
                <Modal.Body className = "filter-selection">
                    <FilterDropDown props/>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button onClick = {() => handleCancel()}>Cancel</Button>
                        <Button bsStyle = "primary" onClick = {() => handleAccpect()}>Apply Changes</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.searchPage
})

const mapDispatchToProps = dispatch => ({
    setShowFilter: show => dispatch(setShowFilter(show)),
    setTempFilter: temp => dispatch(setTempFilter(temp))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SearchFilter)