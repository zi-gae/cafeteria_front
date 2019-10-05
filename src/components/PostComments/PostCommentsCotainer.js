import React from "react";
import PostCommentsPresenter from "./PostCommentsPresenter";

const PostCommentsCotainer = ({ comments }) => {
  return <PostCommentsPresenter comments={comments} />;
};

export default PostCommentsCotainer;
