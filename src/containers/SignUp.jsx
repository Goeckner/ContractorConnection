import React from 'react'
import { connect } from 'react-redux'
import { ControlLabel, Form, FormGroup, Button, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap'
import { setClassList } from '../redux/actions/signUpActions'
import map from 'lodash/map'

const renderClassInfoContainer = classObject => (
  <ListGroupItem>
    <div className="class-item">
      <FormGroup controlId="formControlsText">
        <ControlLabel>Name of Class</ControlLabel>
        <FormControl type="text" placeholder="ex: Intro to Handguns" />
      </FormGroup>

      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Class Description</ControlLabel>
        <FormControl componentClass="textarea" style={{height: 100}}placeholder="Time, price, and short description" />
      </FormGroup>
    </div>
  </ListGroupItem>
)

const addClass = classList => {
  const newClassList = [
    ...classList,
    {
      name: '',
      description: '',
    }
  ]

  return newClassList
}

const SignUpContainer = props => (
	<Form horizontal className="loginForm">
    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <FormControl type="email" placeholder="Email" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <FormControl type="password" placeholder="Password" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Confirm Password</ControlLabel>
      <FormControl type="password" placeholder="Confirm Password" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>First Name</ControlLabel>
      <FormControl type="text" placeholder="Please enter first name" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Last Name</ControlLabel>
      <FormControl type="text" placeholder="Please enter last name" />
    </FormGroup>
    {console.log(props.classList)}
    {
      props.classList ?
        map(props.classList, classObject => (
          <FormGroup>
            <ListGroup className="class-list">
              {renderClassInfoContainer(classObject)}
            </ListGroup>
          </FormGroup>
          ))
        : null
    }
    <Button bsStyle="success" onClick={() => props.setClassList(addClass(props.classList))}>Add a Class</Button>
    <FormGroup className="pull-right">
        <Button bsStyle="primary" type="submit">Sign in</Button>
    </FormGroup>
  </Form>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  setClassList: classes => dispatch(setClassList(classes)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SignUpContainer)
