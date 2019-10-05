import React from "react";
import FeedPostPresenter from "./FeedPostPresenter";

const FeedPostContainer = ({
  title,
  content,
  creator,
  file,
  likeCount,
  comments,
  naturalTime,
  updated_at,
  commentCount
}) => {
  return (
    <FeedPostPresenter
      title={title}
      content={content}
      creator={creator}
      file={file}
      likeCount={likeCount}
      comments={comments}
      naturalTime={naturalTime}
      updated_at={updated_at}
      commentCount={commentCount}
    ></FeedPostPresenter>
  );
};

export default FeedPostContainer;
