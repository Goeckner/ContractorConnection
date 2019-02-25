import React from 'react'
import { connect } from 'react-redux'
import { ControlLabel, Form, FormGroup, Col, Button, FormControl, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {GoogleLogin, GoogleLogout} from 'react-google-login';

const LoginContainer = props => {
  
  const responseGoogle = (response) => {
    console.log(response)
  }

  return (
    <div>
      {/* <Button href = "https://localhost:3001/auth/google">
        <Image  width = {150}
                height = {150}
                alt = "150x150"
                src = {require("../googlelogo.png")}/>
      </Button> */}

      <GoogleLogin
        className = "Google-Sign-In"
        clientId={process.env.REACT_APP_GOOGLE_ID}
        render={renderProps => (
          <Button onClick={renderProps.onClick}>
            <Image  width = {150}
            height = {150}
            alt = "150x150"
            src = {require("../googlelogo.png")}/>
          </Button>
        )}    
        buttonText="Login using Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

    </div>
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
