import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import PostActions from "components/PostActions";

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
      <img src={props.file} alt={props.caption} />
      <div>
        <PostActions number={props.like_count} />
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
      created_at: PropTypes.string,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired
};

export default FeedPostPresenter;
