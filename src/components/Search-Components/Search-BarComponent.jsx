import React from 'react';
import { connect } from 'react-redux'
import {Button, FormControl, Col} from 'react-bootstrap'

const SearchBar = props => (
    <div>
        <Col sm = "6" className = "search-bar">
            <FormControl bsSize = "large">

            </FormControl>
        </Col>
        <Col>
            <Button bsSize = "large">
                Search
            </Button>
        </Col>
    </div>
    
)

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SearchBar)
