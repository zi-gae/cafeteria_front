import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import styled from "styled-components";
import PostInputActions from "components/PostInputActions";

const Container = styled.div``;
const CreatePostBox = styled.div``;

const PostInputBoxPresenter = ({
  handleWriteState,
  createPostClick,
  inputPost,
  stateConditionHandler,
  fileUploadHandler,
  anonymous,
  handleWritePost,
  title,
  content,
  file
}) => {
  return (
    <Container className={styles.container}>
      {inputPost ? (
        <PostInputActions
          anonymous={anonymous}
          handleWriteState={handleWriteState}
          createPostClick={createPostClick}
          handleWritePost={handleWritePost}
          title={title}
          content={content}
          file={file}
          stateConditionHandler={stateConditionHandler}
          fileUploadHandler={fileUploadHandler}
        />
      ) : (
        <CreatePostBox
          className={`${styles.commentBox} ${styles.content}`}
          onClick={stateConditionHandler}
          id="inputPost"
        >
          새 글을 작성해주세요
        </CreatePostBox>
      )}
    </Container>
  );
};

PostInputBoxPresenter.propTypes = {
  handleWriteState: PropTypes.func.isRequired,
  inputPost: PropTypes.bool.isRequired,
  anonymous: PropTypes.bool.isRequired,
  createPostClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default PostInputBoxPresenter;
