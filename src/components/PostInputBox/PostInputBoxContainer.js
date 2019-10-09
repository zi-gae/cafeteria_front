import React, { Component } from "react";
import PostInputBoxPresenter from "./PostInputBoxPresenter";
import PropTypes from "prop-types";

class PostInputBoxContainer extends Component {
  state = {
    inputPost: false,
    anonymous: true,
    title: "",
    content: "",
    file: null
  };
  static propTypes = {
    createPostClick: PropTypes.func
  };

  _handleWriteState = e => {
    const {
      target: { name, value }
    } = e;
    if (name) {
      this.setState({
        [name]: value
      });
    }
  };
  _stateConditionHandler = e => {
    const {
      target: { id, tagName }
    } = e;
    const { anonymous } = this.state;
    if (id) {
      this.setState({
        [id]: true
      });
    }
    if (tagName === "path" || tagName === "svg") {
      if (anonymous === true) {
        this.setState({
          anonymous: false
        });
      } else if (anonymous === false) {
        this.setState({
          anonymous: true
        });
      }
    }
  };
  _fileUploadHandler = e => {
    this.setState({
      file: e.target.files[0]
    });
  };
  _handleWritePost = e => {
    const { title, content, file, anonymous } = this.state;
    const { createPostClick } = this.props;
    createPostClick(title, content, file, anonymous);
    e.preventDefault();
  };

  render() {
    const {
      _handleWriteState,
      _handleWritePost,
      _stateConditionHandler,
      _fileUploadHandler
    } = this;
    const { inputPost, anonymous, title, content, file } = this.state;
    const { createPostClick } = this.props;
    return (
      <PostInputBoxPresenter
        inputPost={inputPost}
        handleWriteState={_handleWriteState}
        anonymous={anonymous}
        createPostClick={createPostClick}
        handleWritePost={_handleWritePost}
        title={title}
        content={content}
        file={file}
        stateConditionHandler={_stateConditionHandler}
        fileUploadHandler={_fileUploadHandler}
      />
    );
  }
}

export default PostInputBoxContainer;
