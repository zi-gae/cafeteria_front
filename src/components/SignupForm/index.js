import SignupContainer from "./SignupContainer";
import { connect } from "react-redux";
import { actionCreators as userActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccount: (stdntNumber, username, nickname, password) => {
      dispatch(
        userActions.createAccount(stdntNumber, username, nickname, password)
      );
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignupContainer);
