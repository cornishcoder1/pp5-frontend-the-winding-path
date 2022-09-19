/* eslint-disable */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import WalkPost from "./WalkPost";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import WhoToFollow from "../profiles/WhoToFollow";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";

function WalkPostsPage({ message, filter = "" }) {
    useRedirect("loggedOut");
    const[walkPosts, setWalkPosts] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    const [query, setQuery] = useState("");

    const currentUser = useCurrentUser();

    const addWalk = (
      <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/walk-posts/create"
      >
        <i className="fa-solid fa-person-circle-plus"></i>
        Add walk
      </NavLink>
    )
  
    // const addGalleryPost = (
    //   <NavLink
    //   className={styles.NavLink}
    //   activeClassName={styles.Active}
    //   to="/gallery-posts/create"
    //   >
    //     <i className="fa-regular fa-square-plus"></i>
    //     {/* Add gallery post */}
    //   </NavLink>
    // )

    useEffect(() => {
        const fetchWalkPosts = async () => {
          try {
            const { data } = await axiosReq.get(`/walk-posts/?${filter}search=${query}`);
            setWalkPosts(data);
            setHasLoaded(true);
          } catch (err) {
            // console.log(err);
          }
        };
    
        setHasLoaded(false);
        const timer = setTimeout(() => {
          fetchWalkPosts();
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
      }, [filter, query, pathname]);
  
      return (
        <Row className="h-100">
          <Col className="py-2 p-0 p-lg-2" lg={8}>

            <Container className='pb-4'>
             
            {currentUser && addWalk}
            {/* {currentUser && addGalleryPost} */}
            </Container>
            
            <WhoToFollow mobile />

            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form
              className={styles.SearchBar}
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className="mr-sm-2"
                placeholder="Search walk posts"
              />
            </Form>


            {hasLoaded ? (
              <>
                {walkPosts.results.length ? (
                  <InfiniteScroll
                    children={
                      walkPosts.results.map((walk_post) => (
                        <WalkPost key={walk_post.id} {...walk_post} setWalkPosts={setWalkPosts} />
                      ))
                    }
                    dataLength={walkPosts.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!walkPosts.next}
                    next={() => fetchMoreData(walkPosts, setWalkPosts)}
                  />
                 
                ) : (
                  <Container className={appStyles.Content}>
                    <Asset src={NoResults} message={message} />
                  </Container>
                )}
              </>
            ) : (
              <Container className={appStyles.Content}>
                <Asset spinner />
              </Container>
            )}
          </Col>
          <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
            <WhoToFollow />
          </Col>
        </Row>
      );
    }

export default WalkPostsPage;