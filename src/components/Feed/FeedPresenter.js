import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import styled from "styled-components";
import FeedPosts from "components/FeedPosts";

const Container = styled.div``;

const FeedPresenter = props => {
  const { loading, feed } = props;
  return loading ? (
    <Container className={styles.feed}>
      <Loading></Loading>
    </Container>
  ) : (
    <Container className={styles.feed}>
      {feed.map(post => (
        <FeedPosts
          key={post.id}
          title={post.title}
          content={post.content}
        ></FeedPosts>
      ))}
    </Container>
  );
};

FeedPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default FeedPresenter;
