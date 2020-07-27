import React from 'react' 
import Navbar from 'react-bootstrap/Navbar'
import logo from '../src/urelle.png'
import Nav from 'react-bootstrap/Nav'

export const NavBar=()=>{
    return(
        
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt=""
        src={logo}
        width="100"
        height="35"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Nav className="justify-content-end">
    <Nav.Link href="#About">About</Nav.Link>
    <Nav.Link href="#Contact">Contact</Nav.Link>
    </Nav>
  </Navbar>
    )
}
