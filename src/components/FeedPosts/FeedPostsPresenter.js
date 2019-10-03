import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";

const FeedPostsPresenter = props => {
  return <div className={styles.feedPost}>FeedPostsPresenter</div>;
};

FeedPostsPresenter.propTypes = {
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }),
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  file: PropTypes.string,
  like_count: PropTypes.number.isRequired,
  comments: PropTypes.shape({
    message: PropTypes.string.isRequired,
    creator: PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  created_
};

export default FeedPostsPresenter;
