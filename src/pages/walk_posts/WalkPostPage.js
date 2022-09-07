/* eslint-disable */
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

function WalkPostPage() {
    const { id } = useParams();
    const [walkPost, setWalkPost] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: walkPost }] = await Promise.all([
              axiosReq.get(`/walk-posts/${id}`),
            ]);
            setWalkPost({ results: [walkPost] });
            console.log(walkPost);
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [id]);


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <p>Walk Post component</p>
        <Container className={appStyles.Content}>
          Comments
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default WalkPostPage;