import React, { Component } from "react";
import CommentBoxPresenter from "./CommentBoxPresenter";

class CommentBoxContainer extends Component {
  constructor() {
    super();
    this.state = {
      comment: ""
    };
  }
  _handleInputChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({
      comment: value
    });
  };
  _handleKeyPress = e => {
    const { key } = e;
    const { comment } = this.state;
    const { submitComment } = this.props;
    if (key === "Enter") {
      e.preventDefault();

      if (comment.length < 1) {
        alert("댓글을 입력해주세요");
      } else {
        submitComment(comment);
        this.setState({
          comment: ""
        });
      }
    }
  };

  render() {
    const { comment } = this.state;
    const { _handleInputChange, _handleKeyPress } = this;
    const { postId } = this.props;
    return (
      <CommentBoxPresenter
        handleInputChange={_handleInputChange}
        handleKeyPress={_handleKeyPress}
        comment={comment}
        postId={postId}
      />
    );
  }
}

export default CommentBoxContainer;
