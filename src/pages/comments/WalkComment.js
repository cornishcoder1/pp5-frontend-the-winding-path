/* eslint-disable */
import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from '../../components/MoreDropdown';
import styles from "../../styles/Comment.module.css";
import WalkCommentEditForm from "./WalkCommentEditForm";

const WalkComment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_on,
    content,
    id,
    setWalkPost,
    setWalkComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments-walk/${id}/`);
      setWalkPost((prevWalkPost) => ({
        results: [
          {
            ...prevWalkPost.results[0],
            walk_comments_count: prevWalkPost.results[0].walk_comments_count - 1,
          },
        ],
      }));

      setWalkComments((prevWalkComments) => ({
        ...prevWalkComments,
        results: prevWalkComments.results.filter((walkComment) => walkComment.id !== id)
      }));
    } catch (err) {}
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
            <WalkCommentEditForm
            id={id}
            profile_id={profile_id}
            content={content}
            profileImage={profile_image}
            setWalkComments={setWalkComments}
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

export default WalkComment;
