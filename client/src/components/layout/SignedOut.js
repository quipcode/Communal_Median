import React, {useState} from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
import Login from '../form/Login'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const SignedOut = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modalLogin, setModalLogin] = useState(false);

  const toggleLoginModal = () => setModalLogin(!modalLogin);
  const submitLogin = () => console.log("login form submission")
  return (
    <React.Fragment>
      
      <Modal isOpen={modalLogin} toggle={toggleLoginModal} className={className}>
        <ModalHeader toggle={toggleLoginModal}>Login</ModalHeader>
        <ModalBody>
          <Login/>
        </ModalBody>
        <ModalFooter>
          {console.log("props is", props)}
          <Button color="primary" onClick={submitLogin}>submit</Button>
          <Button color="secondary" onClick={toggleLoginModal}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Nav className="ml-auto" navbar>
          <NavItem>
          <NavLink onClick={toggleLoginModal}>Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components2/">Register</NavLink>
          </NavItem>
      </Nav>
    </React.Fragment>
  )
}

export default SignedOut