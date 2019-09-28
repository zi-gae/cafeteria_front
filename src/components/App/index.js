import { connect } from "react-redux";
import AppContainer from "./AppContainer";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn
  };
};

export default connect(mapStateToProps)(AppContainer);
