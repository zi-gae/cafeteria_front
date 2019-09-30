import LoginFormContainer from "./LoginFormContainer";
import { connect } from "react-redux";
import { actionCreators as userActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    usernameLogin: (email, password) => {
      dispatch(userActions.usernameLogin(email, password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginFormContainer);
