import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setActivePage } from '../redux/actions/rootActions'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = props => (
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
        <Nav pullRight>
          <NavItem>
            <Link to="/login">
              <div className="navItem">
                Login
              </div>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/sign-up">
              <div className="navItem">
                Sign Up
              </div>
            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  setActivePage: page => dispatch(setActivePage(page)),
})

const withRouterAndConnect = connect(mapStateToProps, mapDispatchToProps)

export default withRouterAndConnect(Header)
