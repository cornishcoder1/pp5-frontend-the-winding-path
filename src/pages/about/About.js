import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import appStyles from "../../App.module.css";
import styles from "../../styles/About.module.css";
import { useRedirect } from "../../hooks/useRedirect";

function About() {
  useRedirect("loggedOut");
  return (
    <Row className={styles.Row}>
        <Col>
            <Container className={`${appStyles.Content} p-4 text-center`}>
            <h2 className={styles.Header}>
                <strong>About us</strong>
            </h2>
            <hr />
            <p>
                Welcome to The Winding Path! 
            </p>
            <p>
                The Winding Path is a place where lovers of the great outdoors can post information about their favourite walks,
                and share artwork and photography inspired by the beautiful natural world they encounter. 
            </p>
            <p>
                Create a Walk Post - share handy information on your favourite walks,
                so that fellow community members know what to expect if they follow in your footsteps.
            </p>
            <p>
                Create a Gallery Post - If photography or artwork is your thing, share your creations with a Gallery Post.
            </p>
            <p>
                Interact - You can save your favourite walk posts and access them in your Saved Walks feed, as well as post
                comments on individual posts. Gallery posts can be liked and commented on too. 
            </p>
            <p>
                Create your first post to get started. Happy hiking!
            </p>
            <br />
            </Container>
      </Col>
    </Row>
  );
}

export default About;