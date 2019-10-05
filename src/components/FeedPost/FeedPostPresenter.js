import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import PostActions from "components/PostActions";
import PostComments from "components/PostComments";
import TimeStamp from "components/TimeStamp";

const FeedPostPresenter = props => {
  return (
    <div className={styles.feedPost}>
      <header>
        <img
          src={props.creator.profile_image || require("images/noProfile.png")}
          alt={props.creator.username}
        />
        <div>
          <span>{props.creator.username}</span>
          <span>{props.location}</span>
        </div>
      </header>
      <img src={props.file} alt={props.content} />
      <div>
        <PostActions likeCount={props.like_count} />
        <PostComments
          content={props.content}
          creator={props.creator.username}
          comments={props.comments}
        ></PostComments>
        <TimeStamp format="post" time={props.natural_time}></TimeStamp>
      </div>
    </div>
  );
};

FeedPostPresenter.propTypes = {
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }),
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  file: PropTypes.string,
  like_count: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      natural_time: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired
};

export default FeedPostPresenter;
