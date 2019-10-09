import PostInputBoxContainer from "./PostInputBoxContainer";
import { connect } from "react-redux";
import { actionCreators as postActions } from "redux/modules/posts";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPostClick: (title, content, file, anonymous) => {
      return dispatch(postActions.createPost(title, content, file, anonymous));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostInputBoxContainer);
