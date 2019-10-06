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
    if (key === "Enter") {
      e.preventDeault();
    }
  };
  render() {
    const { comment } = this.state;
    const { _handleInputChange, _handleKeyPress } = this;
    return (
      <CommentBoxPresenter
        handleInputChange={_handleInputChange}
        handleKeyPress={_handleKeyPress}
        comment={comment}
      ></CommentBoxPresenter>
    );
  }
}

export default CommentBoxContainer;
