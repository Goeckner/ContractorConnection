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

const SignUpContainer = props => {
  return (
    <div>
      <fieldset disabled = {!props.login.editProfile}>
        <Form horizontal className="loginForm">

          <FormGroup>
            <ControlLabel>Address</ControlLabel>
            <FormControl type="text" placeholder="Address" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>City</ControlLabel>
            <FormControl type="text" placeholder="City" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>State</ControlLabel>
            <FormControl type="text" placeholder="State" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" placeholder="Email" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Phone Number</ControlLabel>
            <FormControl type="text" placeholder="Phone" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Zip Code</ControlLabel>
            <FormControl type="text" placeholder="Zip" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Company Name (optional)</ControlLabel>
            <FormControl type="text" placeholder="Please enter company name" />
          </FormGroup>

          <FormGroup>
            <ListGroup className="class-list">
          {
            props.classList ?
              map(props.classList, classObject => (
                  renderClassInfoContainer(props.classList, classObject, props.setClassList)
                ))
              : null
          }
            </ListGroup>
          </FormGroup>
          <Button bsStyle="success" onClick={() => props.setClassList(addClass(props.classList))}>Add a Class</Button>

          {/* <FormGroup>
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

          {props.isInstructor ? renderInstructorForm(props.classList, props.setClassList) : null}*/}

          <FormGroup className="pull-right">
              <Button bsStyle="primary" type="submit">Register</Button>
          </FormGroup>
        </Form>
      </fieldset>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  setClassList: classes => dispatch(setClassList(classes)),
  setIsInstructor: bool => dispatch(setIsInstructor(bool)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SignUpContainer)
