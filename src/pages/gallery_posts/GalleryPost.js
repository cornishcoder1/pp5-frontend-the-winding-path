/* eslint-disable */
import React from 'react';
import styles from "../../styles/GalleryPost.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const GalleryPost = (props) => {

    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        title,
        category,
        content,
        image,
        updated_on,
        galleryPostPage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return <Card className={styles.GalleryPost}>
        <Card.Body>
            <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={55} />
                    {owner}
                </Link>
                <div className="d-flex align-items-center">
                    <span>{updated_on}</span>
                    {is_owner && galleryPostPage && "..."}
                 </div>
            </Media>
        </Card.Body>
        <Link to={`/gallery-posts/${id}`}>
            <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
            {category && <Card.Text>{category}</Card.Text>}
            {title && <Card.Title className="text-centre">{title}</Card.Title>}
            {content && <Card.Text>{content}</Card.Text>}       
            <div className={styles.PostBar}>
                {is_owner ? (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>You cannot like your own post!</Tooltip>}
                    >
                    <i className="far fa-heart" />
                    </OverlayTrigger>
                ) : like_id ? (
                    <span onClick={() => {}}>
                    <i className={`fas fa-heart ${styles.Heart}`} />
                    </span>
                ) : currentUser ? (
                    <span onClick={() => {}}>
                    <i className={`far fa-heart ${styles.HeartOutline}`} />
                    </span>
                ) : (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Log in to like gallery posts!</Tooltip>}
                    >
                    <i className="far fa-heart" />
                    </OverlayTrigger>
                )}
                {likes_count}
                <Link to={`/gallery-posts/${id}`}>
                    <i className="far fa-comments" />
                </Link>
                {comments_count}
            </div>
        </Card.Body>
    </Card>
}

export default GalleryPost
