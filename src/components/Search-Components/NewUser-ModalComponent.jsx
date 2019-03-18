import React from 'react';
import { connect } from 'react-redux'
import {Grid, Row, Button} from 'react-bootstrap'

const NewUserModal = props => {
    return (
        <Grid className = "User_Modal">
            <Row className = "User_Modal_Title">
                Welcome to Contractor Connection, {props.user.name}!
            </Row>
            <Row className = "User_Modal_Subtext">
                Are you an instructor? If so please click the following link!
            </Row>
            <Row className = "User_Modal_Buttons">
                <Button>
                    Instructor
                </Button>
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