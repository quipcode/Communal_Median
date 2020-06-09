import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'

const SignedOut = () => {
  return (
    <React.Fragment>
      <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components1/">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components2/">Register</NavLink>
          </NavItem>
      </Nav>
    </React.Fragment>
  )
}

export default SignedOut