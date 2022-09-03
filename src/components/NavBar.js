import React from 'react';
import { Navbar, Container, Nav, Row, NavLink } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return ( 
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        
        <Nav className="text-right">
          <Nav.Link>
            <Navbar.Brand className='logo'><img src={logo} alt="logo" height="45" />
              </Navbar.Brand>
              The Winding Path    
              </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
            <i className="fa-solid fa-house-chimney"></i>
              Home     
            </Nav.Link>
            <Nav.Link>
            <i className="fa-solid fa-right-to-bracket"></i>
              Log in
            </Nav.Link>
            <Nav.Link>
            <i className="fa-solid fa-pen-to-square"></i>
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar
