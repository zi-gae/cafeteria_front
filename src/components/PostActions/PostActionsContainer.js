import React from "react";
import PostActionsPresenter from "./PostActionsPresenter";

const PostActionsContainer = props => {
  const { likeCount, commentCount } = props;
  return (
    <PostActionsPresenter
      likeCount={likeCount}
      commentCount={commentCount}
    ></PostActionsPresenter>
  );
};

export default PostActionsContainer;
