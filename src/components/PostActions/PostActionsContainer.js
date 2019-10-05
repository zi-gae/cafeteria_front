import React from "react";
import PostActionsPresenter from "./PostActionsPresenter";

const PostActionsContainer = props => {
  const { likeCount } = props;
  return <PostActionsPresenter likeCount={likeCount}></PostActionsPresenter>;
};

export default PostActionsContainer;
