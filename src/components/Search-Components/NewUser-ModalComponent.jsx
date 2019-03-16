import React from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl, ButtonToolbar, Row, Button, Image, Col} from 'react-bootstrap'

const NewUserModal = props => {
    <div>
        Welcome {props.name}!
    </div>
}

const mapStateToProps = state => ({
    ...state.loginReducer
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(NewUserModal)