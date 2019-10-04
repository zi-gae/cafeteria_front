import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import styled from "styled-components";
import FeedPost from "components/FeedPost";

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
        <FeedPost
          key={post.id}
          title={post.title}
          content={post.content}
          creator={post.creator}
          file={post.file}
          like_count={post.like_count}
          comments={post.comments}
          created_at={post.created_at}
          updated_at={post.updated_at}
        ></FeedPost>
      ))}
    </Container>
  );
};

FeedPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default FeedPresenter;
