import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import styled from "styled-components";
import FeedPost from "components/FeedPost";
import PostInputBox from "components/PostInputBox";
import RiceMenu from "components/RiceMenu";

const Container = styled.div``;
const Term = styled.div``;

const FeedPresenter = ({ loading, feed, searchTerm, rice }) => {
  return loading ? (
    <Container className={styles.feed}>
      <Loading />
    </Container>
  ) : (
    <div className={styles.row}>
      <Container className={`${styles.gridItem} ${styles.feed}`}>
        <PostInputBox />
        {searchTerm ? (
          <Term
            className={styles.term}
          >{`"${searchTerm}"에 대한 검색 결과`}</Term>
        ) : null}
        {feed.map(post => (
          <FeedPost
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            creator={post.creator}
            file={post.file}
            likeCount={post.like_count}
            comments={post.comments}
            naturalTime={post.natural_time}
            updated_at={post.updated_at}
            commentCount={post.comment_count}
            isLiked={post.is_liked}
            anonymous={post.anonymous}
          />
        ))}
      </Container>
      <div className={styles.smallBox}>
        <RiceMenu rice={rice} />
        <div className={`${styles.gridItem} ${styles.riceBox}`}>인기글</div>
      </div>
    </div>
  );
};

FeedPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default FeedPresenter;
