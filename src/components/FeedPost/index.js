import { connect } from "react-redux";
import FeedPostContainer from "./FeedPostContainer";
import { actionCreators as postActions } from "redux/modules/posts";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postUpdate: (postId, title, content, file, anonymous) => {
      dispatch(postActions.putPost(postId, title, content, file, anonymous));
    },
    selectedDeletePost: postId => {
      dispatch(postActions.deletePost(postId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPostContainer);
