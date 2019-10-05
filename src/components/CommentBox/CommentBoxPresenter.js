import React from "react";
import styles from "./styles.scss";
import Textarea from "react-textarea-autosize";
import styled from "styled-components";

const Container = styled.form``;

const CommentBoxPresenter = props => {
  return (
    <Container className={styles.commentBox}>
      <Textarea className={styles.input} placeholder="댓글 입력..." />
    </Container>
  );
};

export default CommentBoxPresenter;
