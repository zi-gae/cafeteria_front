import React from "react";
import styles from "./styles.scss";
import Textarea from "react-textarea-autosize";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.form``;

const CommentBoxPresenter = ({
  comment,
  handleInputChange,
  handleKeyPress
}) => {
  return (
    <Container className={styles.commentBox}>
      <Textarea
        className={styles.input}
        placeholder="댓글 입력..."
        value={comment}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </Container>
  );
};

CommentBoxPresenter.propTypes = {
  comment: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired
};

export default CommentBoxPresenter;
