import React from "react";
import PropTypes from "prop-types";
import TimeStamp from "components/TimeStamp";

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
            time={comment.natural_time}
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
      <TimeStamp format="comment" time={props.time}></TimeStamp>
    </span>
  </li>
);

PostCommentsPresenter.propTypes = {
  creator: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      natural_time: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};

export default PostCommentsPresenter;
