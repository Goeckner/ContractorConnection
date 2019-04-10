import React from 'react'
import fetch from 'node-fetch'
import { connect } from 'react-redux'
import { Grid, Col, Button, Row, Image } from 'react-bootstrap'
import {GoogleLogin} from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { setCurrentUser } from '../redux/actions/setCurrentUser'
import { setShowLogin } from '../redux/actions/setShowLogin'
import { setShowNewModal } from '../redux/actions/setShowNewModal'
import { setSignUpForm } from '../redux/actions/setSignUpForm'
import { setClassList, setActiveClassList } from '../redux/actions/signUpActions'

const LoginContainer = props => {
  const loginFetch = async (newUser) => {
    var body = {
      name: newUser.name,
      email: newUser.email,
      profilePicURL: newUser.picture
    }
    console.log(body)
    return await fetch('http://localhost:3001/auth', {
      method: 'post',
      body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
  }

  const trainerFetch = async (id) => {
    var url = "http://localhost:3001/trainers/"
    url += id
    return await fetch(url, {'Content-Type': 'application/json'})
		  	.then(res => res.json())
  }

  const loginCall = async (newUser) => {
    var resp = await loginFetch(newUser)
    if(resp.id === -1){
      console.log("INVALID NAME/EMAIL LOGIN")
      return {id: -1, new: false}
    }
    else{
      return resp
    }
  }

  const getClasses = async (id) => {
    var classes = await fetch("http://localhost:3001/classes/" + id, {'Content-Type': 'application/json'})
      .then(res => res.json())

    let idCounter = 0
    const addClass = (classList, obj) => {
      const newClassList = [
        ...classList,
        {
          id: idCounter,
          name: obj.className,
          description: obj.classDesc,
        }
      ]
      idCounter++
    
      return newClassList
    }

    var lists = []
    classes.forEach(c => {
      lists = addClass(lists, c)
    });
    console.log(lists)

    props.setActiveClassList(lists)
    props.setClassList(lists)
  }
  
  const responseGoogle = async (response) => {
    var newUser = {
      email: response.profileObj.email,
      name: response.profileObj.name,
      picture: response.profileObj.imageUrl,
      id: -1
    }
    var resp = await loginCall(newUser)
    if(resp.info === -1){
      props.setShowLogin(false)
      alert("Invalid Login credintials")
    }
    else{
      if(resp.info.isTrainer === 1)
      {
        resp.info = await trainerFetch(resp.info.id)
        resp.info = resp.info[0]

        var body = {
          address: resp.info.address,
          city: resp.info.city,
          state: resp.info.state,
          phone: resp.info.phone,
          zipcode: resp.info.zipcode,
          company: resp.info.company,
          fullDesc: resp.info.fullDesc,
        }
    
        props.setSignUpForm(body)
        await getClasses(resp.info.id)
        if(resp.info.isCertified === 0){
          alert("It looks like you're not certified yet,\n make sure to complete your training to show up on searches!")
        }
      }
      newUser = resp
      props.setCurrentUser(newUser)
      props.setShowLogin(false)
      props.setShowNewModal(resp.new)
    }    
  }

  const responseFacebook = async (response) => {
    var newUser = {
      email: response.email,
      name: response.name,
      picture: response.picture.data.url,
      id: -1
    }
    var resp = await loginCall(newUser)
    if(resp.info === -1){
      props.setShowLogin(false)
      alert("Invalid Login credintials")
    }
    else{
      if(resp.info.isTrainer === 1)
      {
        resp.info = await trainerFetch(resp.info.id)
        resp.info = resp.info[0]

        var body = {
          address: resp.info.address,
          city: resp.info.city,
          state: resp.info.state,
          phone: resp.info.phone,
          zipcode: resp.info.zipcode,
          company: resp.info.company,
          fullDesc: resp.info.fullDesc,
        }
    
        props.setSignUpForm(body)
        await getClasses(resp.info.id)
        if(resp.info.isCertified === 0){
          alert("It looks like you're not certified yet.\nMake sure to complete your training to show up on searches!")
        }
      }
      newUser = resp
      props.setCurrentUser(newUser)
      props.setShowLogin(false)
      props.setShowNewModal(resp.new)
    }    
  }

  return (
    <Grid style={{width:'100%'}}>
      <Col>
        <Row style={{textAlign: 'center', margin:'auto', color: 'gray', fontSize: '36px'}}>
          Sign in with one of the following
        </Row>
        <Row style={{textAlign: 'center', margin: 'auto', padding: '20px'}}>
          <GoogleLogin
            style={{padding:'20px'}}
            className = "Google-Sign-In"
            clientId={process.env.REACT_APP_GOOGLE_ID}
            render={renderProps => (
              <Button 
                onClick={renderProps.onClick} 
                style = {{backgroundColor: 'lightgray', margin: "auto"}}
              >
                <Image
                  width = {150}
                  height = {150}
                  alt = "150x150"
                  src = {require("../googlelogo.png")}
                />
              </Button>
            )}
            buttonText="Login using Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </Row>
        <Row style={{textAlign: 'center', margin: 'auto', padding: '20px'}}>
          <FacebookLogin
            style={{padding:'20px'}}
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad = {false}
            fields="name,email,picture"
            callback={responseFacebook}
            render={renderProps => (
              <button
                onClick={renderProps.onClick}
                style = {{backgroundColor: 'lightgray', borderRadius: '5px', margin: "auto"}}
              >
                <Image
                  width = {160}
                  height = {160}
                  alt = "160x160"
                  src = {require("../facebook.png")}
                />
              </button>
            )} 
          />
        </Row>
      </Col>    
    </Grid>
    
  )
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setShowLogin: showl => dispatch(setShowLogin(showl)),
  setShowNewModal: shown => dispatch(setShowNewModal(shown)),
  setSignUpForm: signup => dispatch(setSignUpForm(signup)),
  setClassList: classes => dispatch(setClassList(classes)),
  setActiveClassList: aclasses => dispatch(setActiveClassList(aclasses)),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(LoginContainer)
