import CommentFormContainer from "./CommentFormContainer";
import { connect } from "react-redux";
import { actionCreators as postActions } from "redux/modules/posts";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCommentOnComment: (commentId, message) => {
      dispatch(
        postActions.putCommentOnComment(ownProps.postId, commentId, message)
      );
    },
    deleteOnComment: commentId => {
      dispatch(postActions.deleteComment(ownProps.postId, commentId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentFormContainer);
