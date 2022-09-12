import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Alert
} from "react-bootstrap";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";

const ContactForm = () => {
  useRedirect('/');
  const [contactData, setContactData] = useState({
    fname: "",
    lname: "",
    email: "",
    content: "",
  });
  const { fname, lname, email, content } = contactData;
  const [errors, setErrors] = useState({});
  const history = useHistory();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("email", email);
    formData.append("content", content);


    try {
      const { formData } = await axiosReq.post("/contact/", formData);
      history.push('/');
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (    
    <Row className={styles.Row}>
      <Col>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                // placeholder="Username"
                name="fname"
                
                // onChange={handleChange}
              />
            </Form.Group>
            {errors.fname?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
              type="text"
            //   placeholder="Password"
              name="lname"
              />
            </Form.Group>
            {errors.lname?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
              type="email"
            //   placeholder="Password"
              name="email"
              />
            </Form.Group>
            {errors.email?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
              type="textarea"
            //   placeholder="Password"
              name="content"
              />
            </Form.Group>
            {errors.content?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button
            className={btnStyles.Button}
            type="submit">
              Submit
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
            </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default ContactForm;