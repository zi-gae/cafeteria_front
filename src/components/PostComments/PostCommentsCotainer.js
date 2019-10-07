import React, { Component } from "react";
import PostCommentsPresenter from "./PostCommentsPresenter";

class PostCommentsCotainer extends Component {
  constructor() {
    super();
    this.state = {
      commentOpen: false
    };
  }

  _handleCommentOpen = () => {
    this.setState({
      commentOpen: !this.state.commentOpen
    });
  };
  render() {
    const { comments } = this.props;
    const { commentOpen } = this.state;
    const { _handleCommentOpen } = this;
    return (
      <PostCommentsPresenter
        comments={comments}
        commentOpen={commentOpen}
        handleCommentOpen={_handleCommentOpen}
      />
    );
  }
}

export default PostCommentsCotainer;
