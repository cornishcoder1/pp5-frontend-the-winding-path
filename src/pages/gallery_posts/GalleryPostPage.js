/* eslint-disable */
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import GalleryPost from "./GalleryPost";

import GalleryPostCommentCreateForm from "../comments/GalleryPostCommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function GalleryPostPage() {

    const { id } = useParams();
    const [galleryPost, setGalleryPost] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [galleryComments, setGalleryComments] = useState ({results: []});

    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: galleryPost }] = await Promise.all([
              axiosReq.get(`/gallery-posts/${id}`),
            ]);
            setGalleryPost({ results: [galleryPost] });
            console.log(galleryPost);
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
        <GalleryPost {...galleryPost.results[0]} setGalleryPosts={setGalleryPost} GalleryPostPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <GalleryPostCommentCreateForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            gallery_post={id}
            setGalleryPost={setGalleryPost}
            setGalleryComments={setGalleryComments}
          />
          ) : galleryComments.results.length ? (
            "Comments"
          ) : null}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default GalleryPostPage;