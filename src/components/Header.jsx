import React from 'react'
import { NavDropdown, Navbar, Nav, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LoginContainer from '../containers/Login.jsx'
import NewUserModal from './Search-Components/NewUser-ModalComponent'
import { setActivePage } from '../redux/actions/rootActions'
import { setInstructorList } from '../redux/actions/fetchinstructors'
import { setShowLogin } from '../redux/actions/setShowLogin'
import { setCurrentUser } from '../redux/actions/setCurrentUser'
import {setShowNewModal} from '../redux/actions/setShowNewModal'

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
                  <NavDropdown title={props.login.currentUser.info.name} id="basic-nav-dropdown">
                      <Navbar.Brand>
                        <Link to="/sign-up">                    
                          <div>
                            Account
                          </div>
                        </Link>
                      </Navbar.Brand>
                      <Navbar.Brand>
                        <Link to="/">
                          <div onClick={() => {props.setCurrentUser(null)}}>
                            Logout
                          </div>
                        </Link>
                      </Navbar.Brand>
                  </NavDropdown>
                }

                <Modal show={props.login.showLogin} onHide={() => {props.setShowLogin(false)}}>
                  <Modal.Header closeButton />
                  <Modal.Body>
                    <LoginContainer />
                  </Modal.Body>
                </Modal>
                <Modal show = {props.login.showNewModal} onHide={() => {props.setShowNewModal(false)}}>
                  <Modal.Header closeButton />
                  <Modal.Body>
                    <NewUserModal user = {props.login.currentUser} />
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
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setShowNewModal: shown => dispatch(setShowNewModal(shown)),
})

const withRouterAndConnect = connect(mapStateToProps, mapDispatchToProps)

export default withRouterAndConnect(Header)
