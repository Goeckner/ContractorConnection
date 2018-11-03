import React from 'react';
import { connect } from 'react-redux'
import {Button, ButtonToolbar, FormControl, Col} from 'react-bootstrap'
import {setSearchCriteria} from '../../redux/actions/setSearch'


const SearchBar = props => {

    return (
        <div>
            <Col sm = "6" className = "search-bar">
                <FormControl bsSize = "large" type="text" onChange={(e)=>props.setSearch(e.target.value)}>

                </FormControl>
                {console.log(props)}
            </Col>
            <Col>
                <ButtonToolbar>
                    <Button bsSize = "large">
                        Search
                    </Button>
                </ButtonToolbar>
            </Col>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({
    setSearch: Searchtext => dispatch(setSearchCriteria(Searchtext))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SearchBar)
