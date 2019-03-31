import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { ControlLabel, Radio, Form, FormGroup, Button, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap'
import { setClassList, setIsInstructor } from '../redux/actions/signUpActions'
import { setEditProfile } from '../redux/actions/setEditProfile'
import {setShortDesc} from '../redux/actions/setShortDesc'
import {setLongDesc} from '../redux/actions/setLongDesc'
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
  const pullInfo = () => {
    
  }

  const handleSubmit = () => {
    if(props.login.currentUser.info.isTrainer == 0){

    }
    else if(props.login.currentUser.info.isTrainer == 1){

    }
  }

  const determineState = () => {
    if(props.login.currentUser) {
      if(props.login.currentUser.info.isTrainer == 1) {

      }
      else if(props.login.currentUser.info.isTrainer == 0 && props.login.editProfile == false) {
        props.setEditProfile(true)
      }
    }
    else{
      return (<Redirect to="/" />)
    }
  }

  const buttonType = () => {
    if(props.login.currentUser){
      return (
        <Button 
          bsStyle="primary" 
          onClick={()=>{handleSubmit()}}
        >          
          {props.login.currentUser.info.isTrainer == 0 ? <div>Register</div> : <div>Update</div>}
        </Button>
      )
    }
  }
  return (
    <div>
      {determineState()}
      <fieldset disabled = {!props.login.editProfile}>
        <Form horizontal className="loginForm">

          <FormGroup>
            <ControlLabel>Address</ControlLabel>
            <FormControl classID="sign_up_address" type="text" placeholder="Address" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>City</ControlLabel>
            <FormControl classID="sign_up_city" type="text" placeholder="City" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>State</ControlLabel>
            <FormControl classID="sign_up_state" type="text" placeholder="State" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Zip Code</ControlLabel>
            <FormControl classID="sign_up_zipcode" type="text" placeholder="Zip" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Phone Number</ControlLabel>
            <FormControl classID="sign_up_phone" type="text" placeholder="Phone" />
          </FormGroup>
      
          <FormGroup>
            <ControlLabel>Company Name (optional)</ControlLabel>
            <FormControl classID="sign_up_company" type="text" placeholder="Please enter company name" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Short Description ({props.login.shortDescLeft} characters left)</ControlLabel>
            <FormControl classID="sign_up_short" componentClass="textarea" 
                         onChange={(e)=>{if(e.target.value.length > 512){e.target.value = e.target.value.substring(0, 512)}
                                         props.setShortDesc(512-e.target.value.length)}}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Full Description ({props.login.longDescLeft} characters left)</ControlLabel>
            <FormControl classID="sign_up_full" componentClass="textarea" 
                         onChange={(e)=>{if(e.target.value.length > 4095){e.target.value = e.target.value.substring(0, 4096)}
                                         props.setLongDesc(4096-e.target.value.length)}}/>
          </FormGroup>

          <FormGroup>
            <ListGroup className="class-list">
              {
                props.signUp.classList ?
                  map(props.signUp.classList, classObject => (
                      renderClassInfoContainer(props.signUp.classList, classObject, props.setClassList)
                    ))
                  : null
              }
            </ListGroup>
          </FormGroup>
          <Button bsStyle="success" onClick={() => props.setClassList(addClass(props.signUp.classList))}>Add a Class</Button>

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
              {buttonType()}
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
  setEditProfile: edit => dispatch(setEditProfile(edit)),
  setShortDesc: snum => dispatch(setShortDesc(snum)),
  setLongDesc: lnum => dispatch(setLongDesc(lnum))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SignUpContainer)
