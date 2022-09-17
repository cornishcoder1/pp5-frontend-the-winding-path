import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
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
                text here
            </p>
            <p>
                
            </p>
            <p>
                text here
            </p>
            <p>
                text here
            </p>
            <p>text here</p>
            <br />
            </Container>
      </Col>
    </Row>
  );
}

export default About;