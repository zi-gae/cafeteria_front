import { connect } from "react-redux";
import FeedContainer from "./FeedContainer";
import { actionCreators as postActions } from "redux/modules/posts";
import { actionCreators as crawlerActions } from "redux/modules/crawlers";

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { feed },
    crawlers: { rice }
  } = state;

  return {
    feed,
    rice
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(postActions.getFeed());
    },
    getRice: () => {
      dispatch(crawlerActions.getRice());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
