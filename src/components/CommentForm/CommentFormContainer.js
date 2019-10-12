import React, { Component } from "react";
import CommentFormPresenter from "./CommentFormPresenter";

class CommentFormContainer extends Component {
  state = {
    addOnComment: false,
    onComment: "",
    modifyComment: false
  };

  _addCommentOnComment = () => {
    if (this.state.addOnComment) {
      this.setState({
        addOnComment: false
      });
    } else {
      this.setState({
        addOnComment: true
      });
    }
  };

  handleCommentInputChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({
      onComment: value
    });
  };

  _handleKeyPress = e => {
    const { commentId, addCommentOnComment } = this.props;
    const { onComment } = this.state;
    const { key } = e;
    if (key === "Enter") {
      e.preventDefault();
      addCommentOnComment(commentId, onComment);
      this.setState({
        addOnComment: false
      });
    }
  };

  _handleDeleteCommnet = () => {
    const { deleteOnComment, username, user, postId, commentId } = this.props;
    if (username !== user.username) {
      alert("댓글 작성자가 아닙니다.");
    } else {
      deleteOnComment(commentId);
    }
  };

  _handleUpdateComment = () => {
    this.setState({
      modifyComment: true
    });
  };

  render() {
    const { message, username, time, onCommnet } = this.props;
    const { addOnComment, onComment } = this.state;
    const {
      _addCommentOnComment,
      _handleKeyPress,
      handleCommentInputChange,
      _handleDeleteCommnet,
      _handleUpdateComment
    } = this;
    return (
      <CommentFormPresenter
        message={message}
        username={username}
        time={time}
        onCommnet={onCommnet}
        addCommentOnComment={_addCommentOnComment}
        addOnComment={addOnComment}
        handleKeyPress={_handleKeyPress}
        onComment={onComment}
        handleCommentInputChange={handleCommentInputChange}
        handleDeleteCommnet={_handleDeleteCommnet}
        handleUpdateComment={_handleUpdateComment}
      />
    );
  }
}

export default CommentFormContainer;
