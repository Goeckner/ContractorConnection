import React from 'react'
import { connect } from 'react-redux'
import { ControlLabel, Grid, FormGroup, Col, Button, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const LoginContainer = props => {
  
  const responseGoogle = (response) => {
    console.log(response)
  }

  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <Grid>
      <Col>
        <Row style={{textAlign: 'center', margin: 'auto', color: 'gray', fontSize: '36px'}}>
          Sign in with one of the following
        </Row>
        <Row style={{textAlign: 'center', margin: 'auto', padding: '20px'}}>
          <GoogleLogin
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
        <Row  style={{textAlign: 'center', margin: 'auto', padding: '20px'}}>
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad = {false}
            reau
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
	// <Form horizontal className="loginForm">
  //   <FormGroup controlId="formHorizontalEmail">
  //     <Col componentClass={ControlLabel} sm={2}>
  //       Username
  //     </Col>
  //     <Col sm={10}>
  //       <FormControl type="text" placeholder="Username" />
  //     </Col>
  //   </FormGroup>

  //   <FormGroup controlId="formHorizontalPassword">
  //     <Col componentClass={ControlLabel} sm={2}>
  //       Password
  //     </Col>
  //     <Col sm={10}>
  //       <FormControl type="password" placeholder="Password" />
  //     </Col>
  //   </FormGroup>

  //   <FormGroup>
  //     <Col smOffset={2} sm={10}>
  //       <Checkbox>Remember me</Checkbox>
  //     </Col>
  //   </FormGroup>

  //   <FormGroup>
  //     <Col smOffset={2} sm={2}>
  //       <Button bsStyle="primary" type="submit">Sign in</Button>
  //     </Col>
  //     <Col sm={2}>
  //       <Link to="/sign-up">
  //         <Button type="submit">Register</Button>
  //       </Link>
  //     </Col>
  //   </FormGroup>
  // </Form>
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(LoginContainer)
