import React from 'react';
import { connect } from 'react-redux'
import {Grid, Row} from 'react-bootstrap'

const NewUserModal = props => {
    return (
        <Grid style = {{width:'100%'}}>
            <Row className = "User_Modal_Title">
                Welcome to Contractor Connection, {props.user.name}!
            </Row>
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