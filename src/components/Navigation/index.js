import NavigationContainer from "./NavigationContainer";
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "connected-react-router";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToSearch: searchTerm => {
      dispatch(push(`/search/${searchTerm}`));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavigationContainer);
