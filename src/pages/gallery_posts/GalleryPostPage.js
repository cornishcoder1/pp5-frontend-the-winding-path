/*eslint-disable*/
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css"; 
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import GalleryPost from "./GalleryPost";

import GalleryPostCommentCreateForm from "../comments/GalleryPostCommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import GalleryComment from "../comments/GalleryComment";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

function GalleryPostPage() {

    const { id } = useParams();
    const [galleryPost, setGalleryPost] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [galleryComments, setGalleryComments] = useState ({results: []});

    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: galleryPost }, {data: galleryComments}] = await Promise.all([
              axiosReq.get(`/gallery-posts/${id}`),
              axiosReq.get(`/comments-gallery/?gallery_post=${id}`)
            ]);
            setGalleryPost({ results: [galleryPost] });
            setGalleryComments(galleryComments);
            console.log(galleryPost);
          } catch (err) {
            console.log(err);
          }
        };  
        handleMount();
      }, [id]);


  return (
    <Row className={styles.Row}>
      <Col lg={8}>
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
          {galleryComments.results.length ? (
            <InfiniteScroll
              children={galleryComments.results.map((galleryComment) => (
              <GalleryComment
              key={galleryComment.id}
              {...galleryComment}
              setGalleryPost={setGalleryPost}
              setGalleryComments={setGalleryComments}
              />
            ))}
            dataLength={galleryComments.results.length}
            loader={<Asset spinner />}
            hasMore={!!galleryComments.next}
            next={() => fetchMoreData(galleryComments, setGalleryComments)}
          />      
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default GalleryPostPage;