import React from 'react'
import { connect } from 'react-redux'
import { ControlLabel, Form, FormGroup, Col, Button, FormControl } from 'react-bootstrap'

const renderClassInfoContainer = classObject => (
  <div>
    <FormGroup controlId="formControlsText">
      <ControlLabel>Name of Class</ControlLabel>
      <FormControl type="text" placeholder="ex: Intro to Handguns" value={classObject.name} />
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Class Description</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Time, price, and short description" value={classObject.description} />
    </FormGroup>
  </div>
)

const addClass = () => {
  classList.push({
    name: '',
    description: '',
  })
  console.log(classList)
}

const classList = [
  {
    name: 'Intro to Handguns',
    description: 'This is an intro class',
  }
]

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
    <Button bsStyle="success" onClick={() => addClass()}>+</Button>
    {renderClassInfoContainer(classList)}

    <FormGroup>
      <Col smOffset={2} sm={2}>
        <Button bsStyle="primary" type="submit">Sign in</Button>
      </Col>
    </FormGroup>
  </Form>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SignUpContainer)
