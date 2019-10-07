import { connect } from "react-redux";
import { actionCreators as postActions } from "redux/modules/posts";
import SearchContainer from "./SearchContainer";

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { postList }
  } = state;
  return {
    postList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { searchTerm }
    }
  } = ownProps;
  return {
    searchByTerm: () => {
      dispatch(postActions.searchByTerm(searchTerm));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
