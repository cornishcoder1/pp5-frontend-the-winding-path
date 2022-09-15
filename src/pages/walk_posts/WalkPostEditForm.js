import React, { useRef, useState , useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert"

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function WalkPostEditForm() {
  const [errors, setErrors] = useState({});

  const [walkPostData, setWalkPostData] = useState({
    title: "",
    headline: "",
    environment: "",
    wc: "",
    dog_friendly: "",
    difficulty: "",
    length: "",
    duration: "",
    content: "",
    image: "",
  });
  const { title,
    headline,
    environment,
    wc,
    dog_friendly,
    difficulty,
    length, 
    duration,
    content,
    image } = walkPostData;

    const imageInput = useRef(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/walk-posts/${id}/`);
            const { title, headline, environment, wc, dog_friendly, difficulty, length, duration, content, image, is_owner } = data;




    
            is_owner ? setWalkPostData({ title, headline, environment, wc, dog_friendly, difficulty, length, duration, content, image, }) : history.push("/");
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [history, id]);

  const handleChange = (event) => {
    setWalkPostData({
      ...walkPostData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setWalkPostData({
        ...walkPostData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("headline", headline);
    formData.append("environment", environment);
    formData.append("wc", wc);
    formData.append("dog_friendly", dog_friendly);
    formData.append("difficulty", difficulty);
    formData.append("length", length);
    formData.append("duration", duration);
    formData.append("content", content);

    if (imageInput?.current?.files[0]) {
        formData.append("image", imageInput.current.files[0]);
      }
  
      try {
        await axiosReq.put(`/walk-posts/${id}/`, formData);
        history.push(`/walk-posts/${id}`);
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    };

    const textFields = (
      <div className="text-center">
          <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              />
          </Form.Group>
          {errors.title?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}
  
          <Form.Group>
              <Form.Label>Headline</Form.Label>
              <Form.Control
              type="text"
              name="headline"
              value={headline}
              onChange={handleChange}
              />
          </Form.Group>
          {errors.headline?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}
  
          <Form.Group>
              <Form.Label>Environment</Form.Label>
                  <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  name="environment"
                  onChange={handleChange}
                  aria-label="environment"
                  >
                      <option value="other">Other</option>
                      <option value="coastal">Coastal</option>
                      <option value="countryside">Countryside</option>
                      <option value="hill">Hill</option>
                      <option value="moorland">Moorland</option>
                      <option value="mountain">Mountain</option>
                      <option value="peak">Peak</option>
                      <option value="woodland">Woodland</option>
                      
                  </Form.Control>
          </Form.Group>
          {errors.environment?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}
  
          <Form.Group>
              <Form.Label>WC en-route?</Form.Label>
                  <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  name="wc"
                  onChange={handleChange}
                  aria-label="wc"
                  >   <option value="unknown">Unknown</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>                    
                  </Form.Control>
          </Form.Group>
          {errors.wc?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}
  
  
          <Form.Group>
              <Form.Label>Dog friendly?</Form.Label>
                  <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  name="dog_friendly"
                  onChange={handleChange}
                  aria-label="dog_friendly"
                  >   <option value="unknown">Unknown</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>   
                  </Form.Control>
          </Form.Group>
          {errors.dog_friendly?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}
  
          <Form.Group>
              <Form.Label>Difficulty</Form.Label>
                  <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  name="difficulty"
                  onChange={handleChange}
                  aria-label="difficulty"
                  >
                      <option value="unknown">Unknown</option>
                      <option value="easy">Easy</option>
                      <option value="moderate">Moderate</option>
                      <option value="challenging">Challenging</option>      
                  </Form.Control>
          </Form.Group>
          {errors.difficulty?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}
  
          <Form.Group>
              <Form.Label>Length in Miles</Form.Label>
              <Form.Control
              type="text"
              placeholder="e.g '2.4'"
              name="length"
              value={length}
              onChange={handleChange}
              />
          </Form.Group>
          {errors.length?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}
  
          <Form.Group>
              <Form.Label>Duration in Hours</Form.Label>
              <Form.Control
              type="text"
              placeholder="e.g '3'"
              name="duration"
              value={duration}
              onChange={handleChange}
              />
          </Form.Group>
          {errors.duration?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}
  
          <Form.Group>
              <Form.Label>Description</Form.Label>
                  <Form.Control
                  as="textarea"
                  rows={6}
                  name="content"
                  value={content}
                  onChange={handleChange}
                  />
          </Form.Group>
          {errors.content?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
              {message}
            </Alert>
          ))}
  

        <Button
            className={btnStyles.Button}
            onClick={() => history.goBack()}
        >
            cancel
        </Button>
        <Button className={btnStyles.Button} type="submit">
            update
        </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row className={styles.Row}>
        <Col md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
                <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                </figure>
                <div>
                    <Form.Label
                      className={btnStyles.Button}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                </div>
                <Form.File
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeImage}
                    className="d-none"
                    ref={imageInput}
                />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
          <Container className={`${appStyles.Content} ${styles.Container} mt-4 mb-4`}>
            {textFields}
          </Container>
        </Col> 
      </Row>
    </Form>
  );
}

export default WalkPostEditForm;