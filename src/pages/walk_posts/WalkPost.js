/* eslint-disable */
import React from 'react';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import styles from "../../styles/WalkPost.module.css";

const WalkPost = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        posts_saved_count,
        save_id,
        title,
        headline,
        image,
        environment,
        wc,
        dog_friendly,
        difficulty,
        length,
        duration,
        updated_on,
        content,
        walkPostPage,
        setWalkPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    const handleSave = async () => {
        try {
          const { data } = await axiosRes.post("/save/", { walk_post: id });
          setWalkPosts((prevWalkPosts) => ({
            ...prevWalkPosts,
            results: prevWalkPosts.results.map((walk_post) => {
              return walk_post.id === id
                ? { ...walk_post, posts_saved_count: walk_post.posts_save_count + 1, save_id: data.id }
                : walk_post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };

      const handleUnsave = async () => {
        try {
          await axiosRes.delete(`/save/${save_id}/`);
          setWalkPosts((prevWalkPosts) => ({
            ...prevWalkPosts,
            results: prevWalkPosts.results.map((walk_post) => {
              return walk_post.id === id
                ? { ...walk_post, posts_save_count: walk_post.posts_save_count - 1, save_id: null }
                : walk_post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };


    return <Card className={styles.WalkPost}>
        <Card.Body>
            <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={55} />
                    {owner}
                </Link>
                <div className="d-flex align-items-center">
                    <span>
                        {is_owner ? (
                        <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>You cannot save your own post!</Tooltip>}
                        >
                        <i className="far fa-bookmark" />
                        </OverlayTrigger>
                        ) : save_id ? (
                        <span onClick={handleUnsave}>
                        <i className={`fas fa-bookmark ${styles.Bookmark}`} />
                        </span>
                        ) : currentUser ? (
                        <span onClick={handleSave}>
                        <i className={`far fa-bookmark ${styles.BookmarkOutline}`} />
                        </span>
                        ) : (
                        <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Log in to save walk posts!</Tooltip>}
                        >
                        <i className="far fa-bookmark" />
                        </OverlayTrigger>
                        )}
                    </span>
                    {is_owner && walkPostPage && "..."}
                </div>
            </Media>
        </Card.Body>
        <Link to={`/walk-posts/${id}`}>
            <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
            {updated_on && <Card.Title className="text-centre">{updated_on}</Card.Title>} 
            {title && <Card.Title className="text-centre">{title}</Card.Title>}
            {headline && <Card.Text className={styles.Headline}>{headline}</Card.Text>} 
            <p>Environment: {environment}</p>
            <p>WC en-route?: {wc}</p>
            <p>Dog-friendly?: {dog_friendly}</p>
            <p>Difficuly: {difficulty}</p>
            <p>Length: {length}</p>
            <p>Duration: {duration}</p>
            {content && <Card.Text>{content}</Card.Text>} 

            <div className={styles.PostBar}>
                <Link to={`/walk-posts/${id}`}>
                    <i className="far fa-comments" />
                </Link>
                {comments_count}               
            </div>
        </Card.Body>
    </Card>
};
    

export default WalkPost
