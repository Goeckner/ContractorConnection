import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setActivePage } from '../redux/actions/rootActions'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = props => (
  <Panel>
    <Panel.Heading>
      <Link to="/instructors">
        <button onClick={() => props.setActivePage('instructors')}>
          Instructor Page
        </button>
      </Link>
      <Link to="/">
        <button onClick={() => props.setActivePage('home')}>
          Home
        </button>
      </Link>
    </Panel.Heading>
  </Panel>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  setActivePage: page => dispatch(setActivePage(page)),
})

const withRouterAndConnect = connect(mapStateToProps, mapDispatchToProps)

export default withRouterAndConnect(Header)
