import React from 'react';
import { Navbar, Container, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
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

  // const addWalk = (
  //   <NavLink
  //   className={styles.NavLink}
  //   activeClassName={styles.Active}
  //   to="/walk-posts/create"
  //   >
  //     <i className="fa-solid fa-person-circle-plus"></i>
  //     {/* Add walk */}
  //   </NavLink>
  // )

  // const addGalleryPost = (
  //   <NavLink
  //   className={styles.NavLink}
  //   activeClassName={styles.Active}
  //   to="/gallery-posts/create"
  //   >
  //     <i className="fa-regular fa-square-plus"></i>
  //     {/* Add gallery post */}
  //   </NavLink>
  // )


  const loggedInIcons = <>

    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/gallery-posts"

    >
      <OverlayTrigger placement="bottom"
      overlay={<Tooltip>Gallery</Tooltip>}
      >
      <i className="fa-solid fa-paintbrush"></i>
      </OverlayTrigger>
      {/* Gallery */}
    </NavLink>

    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/following"
    >
      <OverlayTrigger placement="bottom"
      overlay={<Tooltip>Following</Tooltip>}
      >
      <i className="fa-solid fa-users"></i>
      </OverlayTrigger>
      {/* Following */}
    </NavLink>

    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/saved-walks"

    >
      <OverlayTrigger placement="bottom"
      overlay={<Tooltip>Saved Walks</Tooltip>}
      >
      <i className="fa-solid fa-bookmark"></i>
      </OverlayTrigger>
      {/* Saved Walks */}
    </NavLink>

    <NavLink
    className={styles.NavLink}
    to="/"
    onClick={handleSignOut}
    >
      <OverlayTrigger placement="bottom"
      overlay={<Tooltip>Log out</Tooltip>}
      >
      <i className="fa-solid fa-sign-out-alt"></i>
      </OverlayTrigger>
      {/* Log out */}
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
      <OverlayTrigger placement="bottom"
      overlay={<Tooltip>Log in</Tooltip>}
      >
      <i className="fa-solid fa-right-to-bracket"></i>
      </OverlayTrigger>
      {/* Log in */}
    </NavLink>
    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/signup"
    >
      <OverlayTrigger placement="bottom"
      overlay={<Tooltip>Sign up</Tooltip>}
      >
      <i className="fa-solid fa-pen-to-square"></i>
      </OverlayTrigger>
      {/* Sign up */}
    </NavLink>
  </>
  );

  return ( 
    <Navbar expanded={expanded} className={styles.NavBar} expand="lg" fixed="top">
      <Container>
        
        <Nav className="text-right">
          <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
            <Navbar.Brand className='logo'><img src={logo} alt="logo" height="30" />
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
            {/* {currentUser && addWalk}
            {currentUser && addGalleryPost} */}
            <NavLink
            exact
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/"
            >
              <OverlayTrigger placement="bottom"
              overlay={<Tooltip>Home</Tooltip>}
              >
              <i className="fa-solid fa-house-chimney"></i>
              </OverlayTrigger>
              {/* Home      */}
            </NavLink>     
                  
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar
