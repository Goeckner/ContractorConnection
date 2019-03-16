import React from 'react';
import { connect } from 'react-redux'
import {Grid} from 'react-bootstrap'

const NewUserModal = props => {
    return (
        <Grid style = {{width:'100%'}}>

        </Grid>
    )
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(NewUserModal)