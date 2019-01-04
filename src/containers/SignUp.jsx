import React from 'react'
import { connect } from 'react-redux'
import { ControlLabel, Radio, Form, FormGroup, Button, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap'
import { setClassList, setIsInstructor } from '../redux/actions/signUpActions'
import filter from 'lodash/filter'
import map from 'lodash/map'


let idCounter = 0
const addClass = classList => {
  const newClassList = [
    ...classList,
    {
      id: idCounter,
      name: '',
      description: '',
    }
  ]
  idCounter++

  return newClassList
}

const removeClass = (classList, classObject) => {
  const newClassList = filter(classList, classToRemove => classToRemove.id !== classObject.id)

  return newClassList
}

const renderClassInfoContainer = (classList, classObject, setClassList) => (
  <ListGroupItem>
    <Button bsStyle="danger" onClick={() => setClassList(removeClass(classList, classObject))}>Remove Class</Button>
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

const renderInstructorForm = (classList, setClassList) => (
  <div>
    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <FormControl type="email" placeholder="Email" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>First Name</ControlLabel>
      <FormControl type="text" placeholder="Please enter first name" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Last Name</ControlLabel>
      <FormControl type="text" placeholder="Please enter last name" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Company Name (optional)</ControlLabel>
      <FormControl type="text" placeholder="Please enter company name" />
    </FormGroup>

    <FormGroup>
      <ListGroup className="class-list">
    {
      classList ?
        map(classList, classObject => (
            renderClassInfoContainer(classList, classObject, setClassList)
          ))
        : null
    }
      </ListGroup>
    </FormGroup>
    <Button bsStyle="success" onClick={() => setClassList(addClass(classList))}>Add a Class</Button>
  </div>
)

const SignUpContainer = props => (
	<Form horizontal className="loginForm">

    <FormGroup>
      <ControlLabel>Username</ControlLabel>
      <FormControl type="text" placeholder="Username" />
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
      <ControlLabel>Are you an instructor?</ControlLabel>
      <div>
        <Radio
          name="radioGroup"
          inline onClick={() => props.setIsInstructor(true)}
        >
          Yes
        </Radio>
        <Radio
          name="radioGroup"
          inline onClick={() => {
            props.setIsInstructor(false)
            props.setClassList([])
          }}
        >
          No
        </Radio>
      </div>
    </FormGroup>

    {props.isInstructor ? renderInstructorForm(props.classList, props.setClassList) : null}

    <FormGroup className="pull-right">
        <Button bsStyle="primary" type="submit">Sign in</Button>
    </FormGroup>
  </Form>
)

const mapStateToProps = state => ({
  ...state.signUp,
})

const mapDispatchToProps = dispatch => ({
  setClassList: classes => dispatch(setClassList(classes)),
  setIsInstructor: bool => dispatch(setIsInstructor(bool)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SignUpContainer)
