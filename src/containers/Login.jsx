import React from 'react'
import fetch from 'node-fetch'
import { connect } from 'react-redux'
import { ControlLabel, Grid, FormGroup, Col, Button, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { setCurrentUser } from '../redux/actions/setCurrentUser'
import { setShowLogin } from '../redux/actions/setShowLogin'
import { setShowNewModal } from '../redux/actions/setShowNewModal'

const LoginContainer = props => {
  const loginFetch = async (newUser) => {
    var body = {
      name: newUser.name,
      email: newUser.email
    }

    return await fetch('https://localhost:3001/auth', {
      method: 'post',
      body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
  }

  const loginCall = async (newUser) => {
    var resp = await loginFetch(newUser)
    if(resp.id == -1)
    {
      console.log("INVALID NAME/EMAIL LOGIN")
      return {id: -1, new: false}
    }
    else{
      return resp
    }
  }
  
  const responseGoogle = async (response) => {
    const newUser = {
      email: response.profileObj.email,
      name: response.profileObj.name,
      picture: response.profileObj.imageUrl,
      id: -1
    }
    var resp = await loginCall(newUser)
    if(resp.id == -1){
      props.setShowLogin(false)
      alert("Invalid Login credintials")
    }
    else{
      newUser.id = resp.id
      props.setCurrentUser(newUser)
      props.setShowLogin(false)
      props.setShowNewModal(resp.new)
    }    
  }

  const responseFacebook = async (response) => {
    const newUser = {
      email: response.email,
      name: response.name,
      picture: response.picture.data.url,
      id: -1
    }
    var resp = await loginCall(newUser)
    
    if(resp.id == -1){
      props.setShowLogin(false)
      alert("Invalid Login credintials")
    }
    else{
      newUser.id = resp.id
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
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(LoginContainer)
