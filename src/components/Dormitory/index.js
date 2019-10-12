import { connect } from "react-redux";
import DormitoryContainer from "./DormitoryContainer";
import { actionCreators as crawlerActions } from "redux/modules/crawlers";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const {
    crawlers: { dormitoryOutState }
  } = state;
  console.log("dormitoryOutState", dormitoryOutState);
  return {
    dormitoryOutState
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dormitoryOut: (
      collegeStudentId,
      collegeStudentPwd,
      dormitoryOutStartDay,
      dormitoryOutEndtDay,
      dormitoryOutReason
    ) => {
      dispatch(
        crawlerActions.postDormitoryOut(
          collegeStudentId,
          collegeStudentPwd,
          dormitoryOutStartDay,
          dormitoryOutEndtDay,
          dormitoryOutReason,
          ownProps.location
        )
      );
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DormitoryContainer)
);
