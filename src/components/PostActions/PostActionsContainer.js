import React from "react";
import PostActionsPresenter from "./PostActionsPresenter";

const PostActionsContainer = ({
  likeCount,
  commentCount,
  handleHeartClick,
  isLiked
}) => {
  return (
    <PostActionsPresenter
      likeCount={likeCount}
      commentCount={commentCount}
      handleHeartClick={handleHeartClick}
      isLiked={isLiked}
    ></PostActionsPresenter>
  );
};

export default PostActionsContainer;
