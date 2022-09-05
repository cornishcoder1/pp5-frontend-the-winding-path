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

function LogInForm() {
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = logInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/login/", logInData);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data)
    }
  };

  const handleChange = (event) => {
    setLogInData({
      ...logInData,
      [event.target.name]: event.target.value,
    });
  };  



    return (    
        <Row className={styles.Row}>
          <Col>
            <Container className={`${appStyles.Content} p-4 `}>
              <h1 className={styles.Header}>Log in</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Label className="d-none">username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                  <Alert key={idx} variant="warning">
                    {message}
                  </Alert>
                ))}
    
                <Form.Group controlId="password">
                  <Form.Label className="d-none">password</Form.Label>
                  <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  />
                </Form.Group>
                {errors.password?.map((message, idx) => (
                  <Alert key={idx} variant="warning">
                    {message}
                  </Alert>
                ))}
    
                <Button
                className={btnStyles.Button}
                type="submit">
                  Login
                </Button>
                {errors.non_field_errors?.map((message, idx) => (
                    <Alert key={idx} variant="warning" className="mt-3">
                      {message}
                    </Alert>
                ))}
                </Form>
            </Container>
            <Container className={`mt-3 ${appStyles.Content}`}>
              <Link className={styles.LinkSignin} to="/signup">
                Don't have an account? <span>Sign up</span>
              </Link>
            </Container>
          </Col>
        </Row>
      );
    };
    
    export default LogInForm;