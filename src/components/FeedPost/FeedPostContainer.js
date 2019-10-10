import React, { Component } from "react";
import FeedPostPresenter from "./FeedPostPresenter";
import PropTypes from "prop-types";

class FeedPostContainer extends Component {
  state = {
    update: false,
    id: this.props.id,
    title: this.props.title,
    content: this.props.content,
    file: this.props.file,
    anonymous: this.props.anonymous
  };

  static propTypes;
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
  _handleUpdateConditon = () => {
    const {
      user,
      creator: { username }
    } = this.props;

    if (user.username === username) {
      this.setState({
        update: true
      });
    } else {
      alert("게시글 작성자가 아닙니다.");
    }
  };
  _handlePostDelete = () => {
    const { id } = this.state;
    const { selectedDeletePost } = this.props;
    selectedDeletePost(id);
  };

  _handlePostUpdate = () => {
    const { id, title, content, file, anonymous } = this.state;
    const { postUpdate } = this.props;
    this.setState({
      update: false
    });
    postUpdate(id, title, content, file, anonymous);
  };
  render() {
    const {
      creator,
      likeCount,
      comments,
      naturalTime,
      updated_at,
      commentCount,
      isLiked
    } = this.props;
    const { update, id, title, content, file, anonymous } = this.state;
    const {
      _handlePostDelete,
      _handleUpdateConditon,
      _handlePostUpdate,
      _handleWriteState
    } = this;

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
        anonymous={anonymous}
        update={update}
        handleWriteState={_handleWriteState}
        handlePostDelete={_handlePostDelete}
        handleUpdateConditon={_handleUpdateConditon}
        handlePostUpdate={_handlePostUpdate}
      />
    );
  }
}

export default FeedPostContainer;
