import React from "react";
import PropTypes from "prop-types";
import TimeStamp from "components/TimeStamp";
import styles from "./styles.scss";
import styled from "styled-components";

const Container = styled.div``;
const List = styled.ul``;
const Item = styled.li``;
const Username = styled.div``;
const Message = styled.span``;
const OnCommentBox = styled.div``;

const PostCommentsPresenter = ({ comments }) => {
  return (
    <Container className={styles.comments}>
      <List styles={styles.list}>
        {comments.map(comment => (
          <Comment
            comments={comments}
            username={comment.creator.username}
            message={comment.message}
            referComment={comment.referComment}
            key={comment.id}
            id={comment.id}
            time={comment.natural_time}
          />
        ))}
      </List>
    </Container>
  );
};

const Comment = ({ comments, username, message, id, referComment, time }) => {
  return (
    <Item className={styles.comment}>
      {referComment === null && (
        <>
          <CommentForm
            username={username}
            message={message}
            time={time}
          ></CommentForm>
          <OnCommentBox className={styles.onComment}>
            <CommentOnComment parentCommentId={id} comments={comments} />
          </OnCommentBox>
        </>
      )}
    </Item>
  );
};

const CommentOnComment = ({ comments, parentCommentId }) => {
  return comments
    .filter(comment => comment.referComment !== null)
    .map(comment => {
      if (parentCommentId === comment.referComment) {
        return (
          <CommentForm
            className={styles.onComment}
            key={comment.id}
            message={comment.message}
            username={comment.creator.username}
            time={comment.natural_time}
          ></CommentForm>
        );
      } else {
        return null;
      }
    });
};

const CommentForm = ({ message, username, time }) => {
  return (
    <>
      <Username className={styles.username}>{username}</Username>
      <Message className={styles.message}>{message}</Message>
      <TimeStamp time={time}></TimeStamp>
    </>
  );
};

PostCommentsPresenter.propTypes = {
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
