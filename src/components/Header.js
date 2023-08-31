import React from 'react';
import logo from './nikeLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Container, Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import {NavLink} from "react-router-dom";


const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Container>
          <NavbarBrand>
            <img src={logo}
                 height='50'
                 width='50'
                 className='d-inline-block align-top'
                 alt="logo"/>

          </NavbarBrand>
          <NavbarToggle area-controls='responsive-navbar-nav'/>
          <NavbarCollapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
              <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
              <Nav.Link to='/contacts' as={NavLink}>Contacts</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Header;