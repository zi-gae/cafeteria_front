import CommentBoxContainer from "./CommentBoxContainer";
import { connect } from "react-redux";
import { actionCreators as postActions } from "redux/modules/posts";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitComment: message => {
      dispatch(postActions.commentPost(ownProps.postId, message));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentBoxContainer);
