import React from 'react';
import { connect } from 'react-redux'

const SearchBar = props => (
    <div className = "search-bar">
        <input

        />
    </div>
)

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SearchBar)
