import { connect } from "react-redux";
import PostActionsContainer from "./PostActionsContainer";
import { actionCreators as postActions } from "redux/modules/posts";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleHeartClick: () => {
      if (ownProps.isLiked) {
        dispatch(postActions.setUnLikePost(ownProps.postId));
      } else {
        dispatch(postActions.setLikePost(ownProps.postId));
      }
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostActionsContainer);
