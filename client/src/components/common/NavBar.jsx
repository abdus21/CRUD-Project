import React from 'react';
import {Navbar,Container, Nav,} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/crud.jpg'

const NavBar = () => {
  return (
    <div>
        <Navbar className='shadow-sm mb-4' bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='fw-bold'> <img style={{width:"30px",height:"30px",borderRadius:"4px"}} src={logo} alt="" /> CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink style={{textDecoration:"none",color:"black"}} to='/'>Product List</NavLink> </Nav.Link>
            <Nav.Link ><NavLink style={{textDecoration:"none",color:"black"}} to='/Create'>Create Product </NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar