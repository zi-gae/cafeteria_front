import SignupContainer from "./SignupContainer";
import { connect } from "react-redux";
import { actionCreators as userActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccount: (username, password, stdntnum, email) => {
      dispatch(userActions.createAccount(username, password, stdntnum, email));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignupContainer);
