import React from "react";
import PropTypes from "prop-types";
import TimeStamp from "components/TimeStamp";
import styles from "./styles.scss";
import styled from "styled-components";

const Container = styled.div``;
const List = styled.ul``;
const Item = styled.li``;
const Username = styled.span``;
const Message = styled.span``;

const PostCommentsPresenter = props => {
  return (
    <Container className={styles.comments}>
      <List styles={styles.list}>
        {props.comments.map(comment => (
          <Comment
            username={comment.creator.username}
            comment={comment.message}
            referComment={comment.referComment}
            key={comment.id}
            time={comment.natural_time}
          />
        ))}
      </List>
    </Container>
  );
};

const Comment = props => (
  <Item className={styles.comment}>
    <Username className={styles.username}>{props.username}</Username>{" "}
    <Message className={styles.message}>
      {props.referComment !== null
        ? `대댓글 id: ${props.referComment} ${props.comment}`
        : props.comment}
      <TimeStamp format="comment" time={props.time}></TimeStamp>
    </Message>
  </Item>
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
