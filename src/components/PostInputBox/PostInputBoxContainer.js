import React, { Component } from "react";
import PostInputBoxPresenter from "./PostInputBoxPresenter";
import PropTypes from "prop-types";

class PostInputBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPost: false,
      anonymous: true,
      title: "",
      content: "",
      file: null
    };
  }
  componentDidMount() {
    if (this.props.inputPost) {
      this.setState({
        inputPost: this.props.inputPost
      });
    }
  }

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

  _imagePreview = e => {
    const reader = new FileReader();
    reader.onload = () => {
      const output = document.getElementById("preview");
      output.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  _fileUploadHandler = e => {
    this.setState({
      file: e.target.files[0]
    });
    this._imagePreview(e);
  };

  _handleWritePost = e => {
    const { title, content, file, anonymous } = this.state;
    const { createPostClick } = this.props;
    this.setState({
      inputPost: false,
      anonymous: true,
      title: "",
      content: "",
      file: null
    });
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
    const { createPostClick, handlePostUpdate } = this.props;

    return (
      <PostInputBoxPresenter
        inputPost={inputPost}
        anonymous={anonymous}
        createPostClick={createPostClick}
        title={this.props.title ? this.props.title : title}
        content={this.props.content ? this.props.content : content}
        file={this.props.file ? this.props.file : file}
        handleWritePost={handlePostUpdate ? handlePostUpdate : _handleWritePost}
        handleWriteState={
          this.props.handleWriteState
            ? this.props.handleWriteState
            : _handleWriteState
        }
        stateConditionHandler={_stateConditionHandler}
        fileUploadHandler={
          this.props.fileUploadHandler
            ? this.props.fileUploadHandler
            : _fileUploadHandler
        }
      />
    );
  }
}

export default PostInputBoxContainer;
