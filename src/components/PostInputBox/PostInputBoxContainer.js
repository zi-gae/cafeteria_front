import React, { Component } from "react";
import PostInputBoxPresenter from "./PostInputBoxPresenter";

class PostInputBoxContainer extends Component {
  state = {
    inputPost: false,
    anonymous: false
  };

  _handleInputPost = () => {
    this.setState({
      inputPost: true
    });
  };
  render() {
    const { _handleInputPost } = this;
    const { inputPost, anonymous } = this.state;
    return (
      <PostInputBoxPresenter
        inputPost={inputPost}
        handleInputPost={_handleInputPost}
        anonymous={anonymous}
      />
    );
  }
}

export default PostInputBoxContainer;
