import React from "react";
import PostInputActionsPresenter from "./PostInputActionsPresenter";

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

export default PostInputActionsContainer;
