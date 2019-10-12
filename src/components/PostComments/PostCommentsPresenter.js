import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import styled from "styled-components";
import CommentForm from "components/CommentForm";

const Container = styled.div``;
const List = styled.ul``;
const Item = styled.li``;
const OnCommentBox = styled.div``;
const SpreadComment = styled.div``;

const PostCommentsPresenter = ({
  comments,
  commentOpen,
  handleCommentOpen,
  addOnComment,
  postId
}) => {
  return (
    <Container className={styles.comments}>
      <List>
        {comments.length > 3 ? (
          <SpreadComment
            className={styles.commentOpen}
            onClick={handleCommentOpen}
          >
            {commentOpen ? "댓글 접기" : "댓글 모두 보기"}
          </SpreadComment>
        ) : (
          comments.map(comment => (
            <Comment
              postId={postId}
              comments={comments}
              username={comment.creator.username}
              message={comment.message}
              referComment={comment.referComment}
              key={comment.id}
              id={comment.id}
              time={comment.natural_time}
              addOnComment={addOnComment}
            />
          ))
        )}
        {!commentOpen
          ? comments.length > 3
            ? comments
                .filter((_, index, comment) => index < 1)
                .map(comment => (
                  <Comment
                    postId={postId}
                    comments={comments}
                    username={comment.creator.username}
                    message={comment.message}
                    referComment={comment.referComment}
                    key={comment.id}
                    id={comment.id}
                    time={comment.natural_time}
                    addOnComment={addOnComment}
                  />
                ))
            : null
          : comments.map(comment => (
              <Comment
                postId={postId}
                comments={comments}
                username={comment.creator.username}
                message={comment.message}
                referComment={comment.referComment}
                key={comment.id}
                id={comment.id}
                time={comment.natural_time}
                addOnComment={addOnComment}
              />
            ))}
      </List>
    </Container>
  );
};

const Comment = ({
  postId,
  comments,
  username,
  message,
  id,
  referComment,
  time,
  addOnComment
}) => {
  return (
    <Item className={styles.comment}>
      {referComment === null && (
        <>
          <CommentForm
            postId={postId}
            commentId={id}
            onCommnet={false}
            username={username}
            message={message}
            time={time}
            addOnComment={addOnComment}
          />
          <CommentOnComment
            postId={postId}
            parentCommentId={id}
            comments={comments}
          />
        </>
      )}
    </Item>
  );
};

const CommentOnComment = ({ postId, comments, parentCommentId }) => {
  return comments
    .filter(comment => comment.referComment !== null)
    .map(comment => {
      if (parentCommentId === comment.referComment) {
        return (
          <OnCommentBox className={styles.onComment} key={comment.id}>
            <CommentForm
              commentId={comment.id}
              postId={postId}
              className={styles.onComment}
              message={comment.message}
              username={comment.creator.username}
              time={comment.natural_time}
              onCommnet={true}
              addOnComment={false}
            />
          </OnCommentBox>
        );
      } else {
        return null;
      }
    });
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
  ).isRequired,
  commentOpen: PropTypes.bool.isRequired,
  handleCommentOpen: PropTypes.func.isRequired,
  addOnComment: PropTypes.bool.isRequired,
  postId: PropTypes.number.isRequired
};

export default PostCommentsPresenter;
