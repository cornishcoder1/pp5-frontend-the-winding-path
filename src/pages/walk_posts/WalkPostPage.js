/* eslint-disable */
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import WalkPost from "./WalkPost";
import WalkPostCommentCreateForm from "../comments/WalkPostCommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import WalkComment from "../comments/WalkComment";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import WhoToFollow from "../profiles/WhoToFollow";

function WalkPostPage() {
    const { id } = useParams();
    const [walkPost, setWalkPost] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [walkComments, setWalkComments] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: walkPost }, {data: walkComments}] = await Promise.all([
              axiosReq.get(`/walk-posts/${id}`),
              axiosReq.get(`/comments-walk/?walk_post=${id}`)
            ]);
            setWalkPost({ results: [walkPost] });
            setWalkComments(walkComments);
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
        <WhoToFollow mobile />
        <WalkPost {...walkPost.results[0]} setWalkPosts={setWalkPost} WalkPostPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <WalkPostCommentCreateForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            walk_post={id}
            setWalkPost={setWalkPost}
            setWalkComments={setWalkComments}
          />
          ) : walkComments.results.length ? (
            "Comments"
          ) : null}
          {walkComments.results.length ? (
            <InfiniteScroll
            children={walkComments.results.map((walkComment) => (
            <WalkComment
            key={walkComment.id}
            {...walkComment}
            setWalkPost={setWalkPost}
            setWalkComments={setWalkComments}
            />
          ))}
          dataLength={walkComments.results.length}
          loader={<Asset spinner />}
          hasMore={!!walkComments.next}
          next={() => fetchMoreData(walkComments, setWalkComments)}
        />      
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      <WhoToFollow />
      </Col>
    </Row>
  );
}

export default WalkPostPage;