import React from "react";
import PostInputActionsPresenter from "./PostInputActionsPresenter";
import PropTypes from "prop-types";

const PostInputActionsContainer = ({
  createPostClick,
  anonymous,
  handleWriteState,
  handleWritePost,
  title,
  content,
  file,
  stateConditionHandler,
  fileUploadHandler
}) => {
  return (
    <PostInputActionsPresenter
      anonymous={anonymous}
      createPostClick={createPostClick}
      handleWriteState={handleWriteState}
      handleWritePost={handleWritePost}
      title={title}
      content={content}
      file={file}
      stateConditionHandler={stateConditionHandler}
      fileUploadHandler={fileUploadHandler}
    />
  );
};

PostInputActionsPresenter.propTypes = {
  createPostClick: PropTypes.func.isRequired,
  handleWriteState: PropTypes.func.isRequired,
  handleWritePost: PropTypes.func.isRequired,
  stateConditionHandler: PropTypes.func.isRequired,
  fileUploadHandler: PropTypes.func.isRequired,
  anonymous: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default PostInputActionsContainer;
