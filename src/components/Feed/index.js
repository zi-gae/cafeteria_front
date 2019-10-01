import { connect } from "react-redux";
import FeedContainer from "./FeedContainer";
import { actionCreators as postActions } from "redux/modules/posts";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(postActions.getFeed());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FeedContainer);
