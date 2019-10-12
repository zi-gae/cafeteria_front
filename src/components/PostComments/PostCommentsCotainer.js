import React, { Component } from "react";
import PostCommentsPresenter from "./PostCommentsPresenter";

class PostCommentsCotainer extends Component {
  constructor() {
    super();
    this.state = {
      commentOpen: false,
      addOnComment: false
    };
  }

  _handleCommentOpen = () => {
    this.setState({
      commentOpen: !this.state.commentOpen
    });
  };

  render() {
    const { comments, postId } = this.props;
    const { commentOpen, addOnComment } = this.state;
    const { _handleCommentOpen } = this;
    return (
      <PostCommentsPresenter
        postId={postId}
        comments={comments}
        commentOpen={commentOpen}
        handleCommentOpen={_handleCommentOpen}
        addOnComment={addOnComment}
      />
    );
  }
}

export default PostCommentsCotainer;
