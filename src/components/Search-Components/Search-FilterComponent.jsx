import React from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl, ButtonToolbar, Modal, Button, ButtonGroup, Row} from 'react-bootstrap'
import Rating from 'react-rating'
import {setShowFilter} from '../../redux/actions/setShowFilter'
import {setTempFilter} from '../../redux/actions/setTempFilter'
import {setActiveFilter} from '../../redux/actions/setActiveFilter'
import {setInstructorList} from '../../redux/actions/fetchinstructors'
import Geocode from 'react-geocode'

const SearchFilter = props => {
    
    // puts together a JSON object to be parsed in a POST request for a filtered list
    const getList = (latitude, longitude) => {
        const body = 
        {
            rating: props.tempFilter.rating,
            latitude: new String(latitude),
            longitude: new String(longitude),
            dist: props.tempFilter.distance
        }

        console.log(body)

        fetch('http://localhost:3001/trainers/filter', {
            method: 'post',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => props.setInstructorList(json));
    }

    const getFilteredInstList = () => {
        var latitude, longitude, err, done
        console.log(document.getElementById("location-form").value)
        if(document.getElementById("location-form").value != ""){
            Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

            Geocode.enableDebug();

            Geocode.fromAddress(document.getElementById("location-form").value).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    latitude = lat
                    longitude = lng
                    console.log(lat, lng)
                    getList(latitude, longitude)
                },
                error => {
                    console.error(error);
                    err = error
                    alert("Server error:", err)
                }
            );
        }
        else{
            getList(0,0)
        }
    }

    const changeTempRating = (rate) => {
        props.setTempFilter({
            distance: props.tempFilter.distance,
            location: document.getElementById("location-form").value,
            rating: rate
        })
    }
    
    const changeTempDistance = (dist) => {
        props.setTempFilter({
            distance: dist,
            location: document.getElementById("location-form").value,
            rating: props.tempFilter.rating
        })
    }

    const changeTempLoc = (loc) => {
        props.setTempFilter({
            distance: props.tempFilter.distance,
            location: loc,
            rating: props.tempFilter.rating
        })
    }
    
    const handleCancel = () => {
        props.setTempFilter({
            distance: props.activeFilter.distance,
            location: props.activeFilter.location,
            rating: props.activeFilter.rating
        })
        props.setShowFilter(false)
    }
    
    const handleAccpect = () => {
        changeTempLoc(document.getElementById("location-form").value)
        props.setActiveFilter({
            distance: props.tempFilter.distance,
            location: props.tempFilter.location,
            rating: props.tempFilter.rating
        })
        getFilteredInstList()

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
                    <FormControl value = {props.tempFilter.distance}
                                 componentClass="select" 
                                 placeholder="No Max" 
                                 onChange = {(e) => changeTempDistance(e.target.value)}>
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
                    <FormControl defaultValue = {props.tempFilter.location}
                                 className = "filter-regular"
                                 type="text" 
                                 placeholder="Address" 
                                 id = "location-form"
                    />
                    </FormGroup>
                    <br />
                <Row className = "filter-title">
                    Rating:
                </Row>
                    <Row className = "filter-regular">
                        Minimum Instructor Rating
                    </Row>
                    <Rating onChange = {(value) => changeTempRating(value)} 
                            className = "filter-regular" 
                            initialRating = {props.tempFilter.rating} 
                            stop = {5}/>
                    <br />
                    <ButtonGroup className = "filter-regular">
                        <Button bsSize = "small"
                                onClick = {() => {changeTempRating(0)}}
                                >Reset</Button>
                    </ButtonGroup>
            </div>
        )
    }

    return (
        <div style = {{width: '100%', margin: '0 auto 10px'}}>
            <Button bsSize = "large" block style = {{color: 'gray'}} onClick={() => props.setShowFilter(true)}>
                Advanced Search
            </Button>

            <Modal show={props.showFilter} onHide={() => handleCancel()}>
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
    setTempFilter: temp => dispatch(setTempFilter(temp)),
    setActiveFilter: active => dispatch(setActiveFilter(active)),
    setInstructorList: instructors => dispatch(setInstructorList(instructors)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SearchFilter)