import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setActivePage } from '../redux/actions/rootActions'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = props => (
  <header>
    <Navbar className="row">
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
              Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <Navbar.Brand>
            <Link to="/instructors">
              Instructor Page
            </Link>
          </Navbar.Brand>
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
