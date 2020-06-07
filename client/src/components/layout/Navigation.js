
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { connect } from 'react-redux'
// import { Collapse } from 'reactstrap'
import {  NavbarBrand, NavLink, NavbarText, NavbarToggler, Collapse, Nav, NavItem, Button,  Modal, ModalHeader, ModalBody,  Navbar, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Dropdown  } from 'reactstrap'


let Navigation = (props) => { 
    const { auth, profile } = props;
    const [toggleNav, navToggler] = useState(false)
    const toggle = () => navToggler(!toggleNav);
  // console.log(auth);
  const links = auth.isAuthenticated ? <SignedIn  /> : <SignedOut />;

  return (
    
      <div>
        {console.log(props, this)}
          <Navbar color="dark" dark expand="md">
        <NavbarBrand  className="mr-auto" href="/"><img src="../assets/images/communalmedianwhite.png" height="40" width="50" alt="Communal Median"/> Communal Median</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={toggleNav} navbar>
            {links}
         
        </Collapse>
      </Navbar>
    </div>
          
   
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state,
    profile: state,
  }
}

export default connect(mapStateToProps)(Navigation)