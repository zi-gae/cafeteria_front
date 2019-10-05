import React from "react";
import PostActionsPresenter from "./PostActionsPresenter";

const PostActionsContainer = ({ likeCount, commentCount }) => {
  return (
    <PostActionsPresenter
      likeCount={likeCount}
      commentCount={commentCount}
    ></PostActionsPresenter>
  );
};

export default PostActionsContainer;
