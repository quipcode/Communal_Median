import React from 'react'
import {Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,DropdownMenu,DropdownItem  } from 'reactstrap'

const SignedIn = () => {
  return (
    <React.Fragment>
    <Nav>
        <NavItem>
        <NavLink href="/components1/">components1</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
       
    </Nav>
     <NavItem>
     <NavLink href="/components2/">Logout</NavLink>
     </NavItem>
    </React.Fragment>
  )
}

export default SignedIn