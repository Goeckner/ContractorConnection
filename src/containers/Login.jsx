import React from 'react'
import { connect } from 'react-redux'
import { ControlLabel, Grid, FormGroup, Col, Button, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { setCurrentUser } from '../redux/actions/setCurrentUser'
import { setShowLogin } from '../redux/actions/setShowLogin'

const LoginContainer = props => {
  
  const responseGoogle = (response) => {
    const newUser = {
      email: response.profileObj.email,
      name: response.profileObj.name,
      picture: response.profileObj.imageUrl
    }
    props.setCurrentUser(newUser)
    props.setShowLogin(false)
  }

  const responseFacebook = (response) => {
    const newUser = {
      email: response.email,
      name: response.name,
      picture: response.picture.data.url
    }
    props.setCurrentUser(newUser)
    props.setShowLogin(false)
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
                style = {{backgroundColor: 'lightgray'}}
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
                style = {{backgroundColor: 'lightgray', borderRadius: '5px'}}
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
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(LoginContainer)
