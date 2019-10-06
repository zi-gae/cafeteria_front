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
  commentCount,
  isLiked,
  id
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
      isLiked={isLiked}
      id={id}
    ></FeedPostPresenter>
  );
};

export default FeedPostContainer;
