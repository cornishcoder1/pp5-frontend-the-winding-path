import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from '../../components/MoreDropdown';
import styles from "../../styles/Comment.module.css";
import GalleryCommentEditForm from "./GalleryCommentEditForm";

const GalleryComment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_on, 
    content,
    id,
    setGalleryPost,
    setGalleryComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments-gallery/${id}/`);
      setGalleryPost((prevGalleryPost) => ({
        results: [
          {
            ...prevGalleryPost.results[0],
            gallery_comments_count: prevGalleryPost.results[0].gallery_comments_count - 1,
          },
        ],
      }));

      setGalleryComments((prevGalleryComments) => ({
        ...prevGalleryComments,
        results: prevGalleryComments.results.filter((galleryComment) => galleryComment.id !== id),
      }));
    } catch (err) {""}
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_on}</span>
          {showEditForm ? (
            <GalleryCommentEditForm
            id={id}
            profile_id={profile_id}
            content={content}
            profileImage={profile_image}
            setGalleryComments={setGalleryComments}
            setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};
export default GalleryComment;