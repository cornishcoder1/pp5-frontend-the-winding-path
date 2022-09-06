import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const {expanded, setExpanded, ref} = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addWalk = (
    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/walk-posts/create"
    >
      <i className="fa-solid fa-person-circle-plus"></i>Add walk
    </NavLink>
  )

  const addGalleryPost = (
    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/gallery-posts/create"
    >
      <i className="fa-regular fa-square-plus"></i>Add gallery post
    </NavLink>
  )


  const loggedInIcons = <>
    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/gallery-posts"

    >
      <i className="fa-solid fa-paintbrush"></i>Gallery
    </NavLink>

    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/following"

    >
      <i className="fa-solid fa-users"></i>Following
    </NavLink>

    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/saved-walks"

    >
      <i className="fa-solid fa-bookmark"></i>Saved Walks
    </NavLink>

    <NavLink
    className={styles.NavLink}
    to="/"
    onClick={handleSignOut}
    >
      <i className="fa-solid fa-sign-out-alt"></i>Log out
    </NavLink>

    <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} alt="profile"
                height={40} />
        {currentUser?.username}
      </NavLink>

  </>

  const loggedOutIcons = (
  <>
    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/login"
    >
      <i className="fa-solid fa-right-to-bracket"></i>Log in
    </NavLink>
    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/signup"
    >
      <i className="fa-solid fa-pen-to-square"></i>Sign up
    </NavLink>
  </>
  );

  return ( 
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        
        <Nav className="text-right">
          <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
            <Navbar.Brand className='logo'><img src={logo} alt="logo" height="45" />
              </Navbar.Brand>
              The Winding Path    
              </NavLink>
        </Nav>
        <Navbar.Toggle
        ref={ref}
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left"> 
          
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
              <i className="fa-solid fa-house-chimney"></i>Home     
            </NavLink>     
            {currentUser && addWalk}
            {currentUser && addGalleryPost}       
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar
