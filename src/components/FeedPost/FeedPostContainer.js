import React from "react";
import FeedPostPresenter from "./FeedPostPresenter";

const FeedPostContainer = props => {
  const {
    title,
    content,
    creator,
    file,
    like_count,
    comments,
    created_at,
    updated_at
  } = props;
  return (
    <FeedPostPresenter
      title={title}
      content={content}
      creator={creator}
      file={file}
      like_count={like_count}
      comments={comments}
      created_at={created_at}
      updated_at={updated_at}
    ></FeedPostPresenter>
  );
};

export default FeedPostContainer;
