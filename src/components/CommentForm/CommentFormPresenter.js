import React from "react";
import styled from "styled-components";
import styles from "./styles.scss";
import TimeStamp from "components/TimeStamp";
import Textarea from "react-textarea-autosize";
import PropTypes from "prop-types";

const Container = styled.div``;
const Username = styled.div``;
const Message = styled.span``;
const CommentUpdateBox = styled.span``;
const TextareaBox = styled.div``;
const Menu = styled.span``;
const CommentFormPresenter = ({
  handleKeyPress,
  handleCommentInputChange,
  onComment,
  message,
  username,
  time,
  onCommnet,
  addCommentOnComment,
  addOnComment,
  handleDeleteCommnet
}) => {
  return (
    <Container>
      <TextareaBox className={styles.textareaBox}>
        <div className={styles.updateDelete}>
          <Username className={styles.username}>{username}</Username>
          {onCommnet ? (
            <CommentUpdateBox className={styles.onCommentMenu}>
              <Menu className={styles.menu} onClick={handleDeleteCommnet}>
                삭제
              </Menu>
            </CommentUpdateBox>
          ) : (
            <CommentUpdateBox className={styles.commentMenu}>
              <Menu className={styles.menu} onClick={handleDeleteCommnet}>
                삭제
              </Menu>
              <Menu className={styles.menu} onClick={addCommentOnComment}>
                대댓글
              </Menu>
            </CommentUpdateBox>
          )}
        </div>
        <Message className={styles.message}>{message}</Message>
        <TimeStamp title="false" time={time} />
        {addOnComment ? (
          <TextareaBox
            className={`${styles.textareaBox} ${styles.onCommentBox}`}
          >
            <Textarea
              className={styles.inputOnComment}
              placeholder="댓글 입력..."
              value={onComment}
              onInput={handleCommentInputChange}
              onKeyPress={handleKeyPress}
            />
          </TextareaBox>
        ) : null}
      </TextareaBox>
    </Container>
  );
};

CommentFormPresenter.propTypes = {
  message: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onCommnet: PropTypes.bool.isRequired,
  addCommentOnComment: PropTypes.func,
  addOnComment: PropTypes.bool.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  onComment: PropTypes.string.isRequired,
  handleCommentInputChange: PropTypes.func.isRequired,
  handleDeleteCommnet: PropTypes.func.isRequired
};

export default CommentFormPresenter;
