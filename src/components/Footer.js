import React from 'react'
import { Col, Container, Navbar, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={`${styles.Footer} fixed-bottom`}>  
            <Navbar>
                <Container>
                    <Col className='text-center'>
                    <NavLink
                        className={`${styles.NavLink} pt-0`}
                        activeclassname={styles.Active}
                        to="/contact/"
                        >
                        <OverlayTrigger placement="top"
                        overlay={<Tooltip>Contact Us</Tooltip>}
                        >
                        <i className="fa-solid fa-envelope"></i>
                        </OverlayTrigger>
                    </NavLink>
                    </Col>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer

