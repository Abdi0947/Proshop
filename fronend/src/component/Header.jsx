import React from 'react';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { FaShoppingCart,FaUser } from 'react-icons/fa';
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
          <img src={Logo} alt="proshop"/>
          ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="/cart">
                <FaShoppingCart /> Cart
              </NavLink>
              <NavLink href="/login">
                <FaUser/> Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;