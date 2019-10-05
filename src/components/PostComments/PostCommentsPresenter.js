import React from "react";
import PropTypes from "prop-types";

const PostCommentsPresenter = props => {
  return (
    <div>
      <ul>
        {props.comments.map(comment => (
          <Comment
            username={comment.creator.username}
            comment={comment.message}
            referComment={comment.referComment}
            key={comment.id}
          />
        ))}
      </ul>
    </div>
  );
};

const Comment = props => (
  <li>
    <span>{props.username}</span>{" "}
    <span>
      {props.referComment !== null
        ? `대댓글 id: ${props.referComment} ${props.comment}`
        : props.comment}
    </span>
  </li>
);

PostCommentsPresenter.propTypes = {
  creator: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};

export default PostCommentsPresenter;
