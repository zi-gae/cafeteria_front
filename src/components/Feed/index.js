import { connect } from "react-redux";
import FeedContainer from "./FeedContainer";
import { actionCreators as postActions } from "redux/modules/posts";

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { feed }
  } = state;
  return {
    feed: feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(postActions.getFeed());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
