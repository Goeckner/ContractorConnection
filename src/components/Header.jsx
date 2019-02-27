import React from 'react'
import { Navbar, Nav, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LoginContainer from '../containers/Login.jsx'
import { setActivePage } from '../redux/actions/rootActions'
import { setInstructorList } from '../redux/actions/fetchinstructors'
import { setShowLogin } from '../redux/actions/setShowLogin'
import fetch from 'node-fetch'

const Header = props => {

  return (
    <header>
      <Navbar className="row headerContainer">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <div className="navItem">
                Home
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <Navbar.Brand>
            <Link to="/instructors">
                <div className="navItem">
                  Instructors
                </div>
              </Link>
            </Navbar.Brand>
          </Nav>
          <Nav>
            <Navbar.Brand>
              <Link to="/training">
                <div className="navItem">
                  Training
                </div>
              </Link>
            </Navbar.Brand>
          </Nav>
          <Nav pullRight>
            <Navbar.Brand>
              {/* <Link to="/login">
                <div className="navItem">
                  Login
                </div>
              </Link> */}
              {console.log(props.login)}
                {!props.login.currentUser ?
              <div>
                  <div 
                    className="navItem" 
                    style = {{color: 'white'}}
                    onClick={() => {props.setShowLogin(true)}}
                  >
                    Login
                  </div>
              </div>              
                :
                <div
                  className="navItem" 
                  style = {{color: 'white'}}
                >
                  Someone is logged in
                </div>
                }

                <Modal show={props.login.showLogin} onHide={() => {props.setShowLogin(false)}}>
                  <Modal.Header closeButton />
                  <Modal.Body>
                    <LoginContainer />
                  </Modal.Body>
                </Modal>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  setActivePage: page => dispatch(setActivePage(page)),
  setInstructorList: instructors => dispatch(setInstructorList(instructors)),
  setShowLogin: showl => dispatch(setShowLogin(showl)),
})

const withRouterAndConnect = connect(mapStateToProps, mapDispatchToProps)

export default withRouterAndConnect(Header)
