import React, {useContext, useState} from 'react';
import logo from './nikeLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import {NavLink} from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa';
/*
import {CartContext} from '../context/CartContext';
*/
import Cart from './Cart';


const Header = ({ handleSearch, searchText, handleCartToggle, closeCart, isCartOpen, setIsCartOpen, cartItems }) => {

/*  const {cartItems} = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }*/

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

            <Form inline="true">
              <div className="d-flex">
                <FormControl
                  inline="true"
                  type="text"
                  className="me-sm-2"
                  onChange={handleSearch}
                />
                <Button
                  variant="outline-info"
                  inline="true"
                >
                  Search</Button>


              <Button
                className="rounded-circle ms-sm-2"
                style={{width: "4rem", height: "4rem", position: "relative"}}
                variant="outline-primary"
                onClick={handleCartToggle}
              >
                <FaShoppingCart
                  className="m-lg-2"
                  size={20}
                  style={{cursor: 'pointer'}}
                />
                <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "red",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)"
                }}
                >
{/*{cartQuantity}*/}

                </div>
              </Button>
              </div>
            </Form>
          </NavbarCollapse>
         {
          isCartOpen &&
           < Cart
             items = {cartItems}
             isCartOpen = {isCartOpen}
             closeCart = {closeCart}
           />
        }
        </Container>
      </Navbar>
    </>
  );
};

export default Header;