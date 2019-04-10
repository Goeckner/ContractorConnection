import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { ControlLabel, Radio, Form, FormGroup, Button, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap'
import { setClassList, setActiveClassList, setIsInstructor } from '../redux/actions/signUpActions'
import { setEditProfile } from '../redux/actions/setEditProfile'
import { setSignUpForm } from '../redux/actions/setSignUpForm'
import {setLongDesc} from '../redux/actions/setLongDesc'
import { setCurrentUser } from '../redux/actions/setCurrentUser'
import filter from 'lodash/filter'
import Geocode from 'react-geocode'
import map from 'lodash/map'
import {withRouter} from 'react-router';

const addClass = (classList) => {
  const newClassList = [
    ...classList,
    {
      id: classList.length,
      name: '',
      description: '',
    }
  ]

  return newClassList
}

const removeClass = (classList, classObject) => {
  const newClassList = filter(classList, classToRemove => classToRemove.id !== classObject.id)
  newClassList.forEach(c => {
    if(c.id > classObject.id){
      newClassList[c.id-1].id--
    }
  });

  return newClassList
}

const renderClassInfoContainer = (classList, classObject, setClassList) => {
  const updateClasses = (nod, value) => {
    
    var tempList = []
    
    tempList = classList
    tempList.forEach(c => {
      if(c.id === classObject.id){
        if(nod === 0){
          tempList[c.id].name = value
        }
        else if(nod === 1){
          tempList[c.id].description = value
        }
      }
    });

    console.log(tempList)
    setClassList(tempList)
  }

  return (
    <ListGroupItem>
      <Button bsStyle="danger" onClick={() => setClassList(removeClass(classList, classObject))}>Remove Class</Button>
      <div className="class-item">
        <FormGroup controlId="formControlsText">
          <ControlLabel>Name of Class</ControlLabel>
          <FormControl onChange={(e)=>{updateClasses(0, e.target.value)}} defaultValue = {classList[classObject.id].name} type="text" placeholder="ex: Intro to Handguns" />
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Class Description</ControlLabel>
          <FormControl onChange={(e)=>{updateClasses(1, e.target.value)}} defaultValue = {classList[classObject.id].description} componentClass="textarea" style={{height: 100}}placeholder="Time, price, and short description" />
        </FormGroup>
      </div>
    </ListGroupItem>
  )
}

const SignUpContainer = props => {

  const updateClasses = async (id, classes) => {
    var url = "http://localhost:3001/classes/"
    url += id
    await fetch(url, {
      method: 'delete',
      headers: {'Content-Type': 'application/json'}
    })
      .then(res => res.json())

     classes.forEach(c => {
      var bodys = {
        className: c.name,
        classDesc: c.description,
        trainerID: id
      }
      fetch(url, {
        method: 'post',
        body: JSON.stringify(bodys),
        headers: {'Content-Type': 'application/json'}
      })
        .then(res => res.json())
    });
  }

  const refreshInst = async (body) => {
    var url = "http://localhost:3001/trainers/"
    url += body.trainerID
    await fetch(url, {
      method: 'delete',
      headers: {'Content-Type': 'application/json'}
    })
        .then(res => res.json())
        
    await fetch("http://localhost:3001/trainers", {
      method: 'post',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    })
        .then(res => res.json())
  }

  const trainerFetch = async (id) => {
    var url = "http://localhost:3001/trainers/"
    url += id
    return await fetch(url, {'Content-Type': 'application/json'})
		  	.then(res => res.json())
  }

  const getCoor = async (addr, city, state) => {
    var address = addr + " " + city + " " + state
    var latitude = 0
    var longitude = 0
    var err
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

    Geocode.enableDebug();

    await Geocode.fromAddress(address).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            latitude = lat
            longitude = lng
        },
        error => {
            console.error(error);
            err = error
            alert("Server error:", err)
        }
    );
    
    return {latitude, longitude}
  }

  const pullInfo = () => {
    console.log("sql test", props.signUp)
    return {
      address: document.getElementById("sign_up_address").value,
      city: document.getElementById("sign_up_city").value,
      state: document.getElementById("sign_up_state").value,
      zipcode: document.getElementById("sign_up_zipcode").value,
      phone: document.getElementById("sign_up_phone").value,
      company: document.getElementById("sign_up_company").value,
      fullDesc: document.getElementById("sign_up_full").value,
      classes: props.signUp.classList,
    }
  }

  const loadInstInfo = (info) => {
    var body = {
      address: info.address,
      city: info.city,
      state: info.state,
      phone: info.phone,
      zipcode: info.zipcode,
      company: info.company,
      fullDesc: info.fullDesc,
    }

    props.setSignUpForm(body)
  }

  const handleSubmit = async () => {
    var info = pullInfo()
    var coors = await getCoor(info.address, info.city, info.state)

    var body = {
      address: info.address,
      isCertified: 0,
      fullDesc: info.fullDesc,
      company: info.company,
      phone: info.phone,
      city: info.city,
      state: info.state,
      zipcode: info.zipcode,
      latitude: coors.latitude,
      longitude: coors.longitude,
      shortDesc: "NULL",
      trainerID: props.login.currentUser.info.id,
      rating: 0,
      numRatings: 0,
      quizes: 0
    }

    await refreshInst(body)
    await updateClasses(body.trainerID, info.classes)
    props.setActiveClassList(info.classes)

    var usr = {
      info: await trainerFetch(props.login.currentUser.info.id),
      new: props.login.currentUser.new
    }
    usr.info = usr.info[0]
    usr.info.isTrainer = 1

    await props.setCurrentUser(usr)
    loadInstInfo(body)    

    if(props.login.currentUser.info.isTrainer === 0){
      await fetch("http://localhost:3001/users/update/" + usr.info.id, {
        method: "put",
        headers: {'Content-Type': 'application/json'}
      })
        .then(res => res.json())

      props.setEditProfile(false)

      props.history.push("/training")
    }
    else if(props.login.currentUser.info.isTrainer === 1){
      props.setEditProfile(false)

      alert("Changes saved")
    }
  }

  const determineState = () => {
    if(props.login.currentUser) {
      if(props.login.currentUser.info.isTrainer === 1) {
        return (
          <div style={{textAlign: "center"}}>
            <div className="App-header" style={{padding: "10px"}}>
              Account Information
            </div>
            <FormGroup>
              <ControlLabel style={{padding: "5px"}}>Edit Information?</ControlLabel>
              <div>
                <Radio
                  name="radioGroup"
                  inline onClick={() => {props.setEditProfile(true)}}
                >
                  Yes
                </Radio>
                <Radio
                  name="radioGroup"
                  inline onClick={() => {props.setEditProfile(false)}}
                >
                  No
                </Radio>
              </div>
            </FormGroup>
          </div>
        )
      }
      else if(props.login.currentUser.info.isTrainer === 0) {
        if(props.login.editProfile === false){
          props.setEditProfile(true)
        }        
        return (<div className="App-header" style={{padding: "10px"}}>Become a Trainer</div>)
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
          onClick={async ()=>{return await handleSubmit()}}
        >          
          {props.login.currentUser.info.isTrainer === 0 ? <div>Register</div> : <div>Update</div>}
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
            <FormControl required id="sign_up_address" type="text" placeholder="Address" defaultValue={props.login.signUpForm.address}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>City</ControlLabel>
            <FormControl required id="sign_up_city" type="text" placeholder="City" defaultValue={props.login.signUpForm.city}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>State</ControlLabel>
            <FormControl required id="sign_up_state" type="text" placeholder="State" defaultValue={props.login.signUpForm.state}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Zip Code</ControlLabel>
            <FormControl required id="sign_up_zipcode" type="text" placeholder="Zip" defaultValue={props.login.signUpForm.zipcode}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Phone Number</ControlLabel>
            <FormControl required id="sign_up_phone" type="text" placeholder="Phone" defaultValue={props.login.signUpForm.phone}/>
          </FormGroup>
      
          <FormGroup>
            <ControlLabel>Company Name</ControlLabel>
            <FormControl required id="sign_up_company" type="text" placeholder="Please enter company name" defaultValue={props.login.signUpForm.company}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Full Description ({props.login.longDescLeft} characters left)</ControlLabel>
            <FormControl required id="sign_up_full" componentClass="textarea" defaultValue={props.login.signUpForm.fullDesc}
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
  setActiveClassList: aclasses => dispatch(setActiveClassList(aclasses)),
  setIsInstructor: bool => dispatch(setIsInstructor(bool)),
  setEditProfile: edit => dispatch(setEditProfile(edit)),
  setLongDesc: lnum => dispatch(setLongDesc(lnum)),
  setSignUpForm: signup => dispatch(setSignUpForm(signup)),
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(SignUpContainer)
