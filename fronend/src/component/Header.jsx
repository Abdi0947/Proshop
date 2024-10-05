import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'; // Corrected import
import { Navbar, Container, Nav } from 'react-bootstrap'; // Removed NavLink import
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={Logo} alt="proshop" />
              ProShop
            </Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
