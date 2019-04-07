import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Grid, Row, Button} from 'react-bootstrap'
import { setShowNewModal } from '../../redux/actions/setShowNewModal'

const NewUserModal = props => {
    return (
        <Grid className = "User_Modal">
            <Row className = "User_Modal_Title">
                Welcome to Contractor Connection, {props.login.currentUser.info.name}!
            </Row>
            <Row className = "User_Modal_Subtext">
                Are you an instructor? If so please click the following link!
            </Row>
            <Row className = "User_Modal_Button">
                <Button bsSize = "large" onClick={()=>{props.setShowNewModal(false)}}>
                    <Link to="/sign-up">
                        <div className="navItem" style={{color: "black"}}>
                            Instructor
                        </div>
                    </Link>
                </Button>
            </Row>
        </Grid>
    )
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    setShowNewModal: shown => dispatch(setShowNewModal(shown)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(NewUserModal)