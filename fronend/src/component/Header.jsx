import React from 'react';
import {LinkContainer} from 'react-bootstrap';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { FaShoppingCart,FaUser } from 'react-icons/fa';
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
            <img src={Logo} alt="proshop"/>
            ProShop</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <NavLink>
                  <FaShoppingCart /> Cart
                </NavLink>
              </LinkContainer>
              
              <LinkContainer to="/login">
                <NavLink>
                  <FaUser/> Login
                </NavLink>
              </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
