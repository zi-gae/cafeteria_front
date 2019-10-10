import React, { Component } from "react";
import DormitoryPresenter from "./DormitoryPresenter";
import PropTypes from "prop-types";

class DormitoryContainer extends Component {
  state = {
    collegeStudentId: "",
    collegeStudentPwd: "",
    dormitoryOutStartDay: "",
    dormitoryOutEndtDay: "",
    dormitoryOutReason: "",
    manualView: false
  };

  static propTypes = {
    dormitoryOut: PropTypes.func.isRequired,
    dormitoryOutState: PropTypes.string,
    location: PropTypes.object
  };

  componentDidUpdate = nextProps => {
    if (nextProps !== this.props) {
      const { dormitoryOutState } = this.props;
      this._handleErrorAlert(dormitoryOutState);
      // this.props.history.push("/");
    }
  };

  _handleErrorAlert = logedMsg => {
    if (logedMsg === "pwdwrong") {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    } else if (logedMsg === "idlock") {
      alert("비밀번호 5회로 계정이 잠겼습니다.");
    } else if (logedMsg === "overlap") {
      alert("이미 신청 되어 있습니다.");
    } else if (logedMsg === "notaccess") {
      alert("기숙사생이 아닙니다.");
    } else if (logedMsg === "success") {
      alert("신청 되었습니다.");
      this.props.history.push("/");
    }
  };

  _handleDormitoryOutInfo = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({
      [name]: value
    });
  };

  _handleSubmitDormitoryOut = e => {
    e.preventDefault();
    const {
      collegeStudentId,
      collegeStudentPwd,
      dormitoryOutStartDay,
      dormitoryOutEndtDay,
      dormitoryOutReason
    } = this.state;
    const { dormitoryOut } = this.props;
    dormitoryOut(
      collegeStudentId,
      collegeStudentPwd,
      dormitoryOutStartDay,
      dormitoryOutEndtDay,
      dormitoryOutReason
    );
    this.setState({
      collegeStudentId: "",
      collegeStudentPwd: "",
      dormitoryOutStartDay: "",
      dormitoryOutEndtDay: "",
      dormitoryOutReason: ""
    });
  };

  _handleManualView = () => {
    const { manualView } = this.state;

    this.setState(() => {
      return manualView ? { manualView: false } : { manualView: true };
    });
  };

  render() {
    const {
      collegeStudentId,
      collegeStudentPwd,
      dormitoryOutStartDay,
      dormitoryOutEndtDay,
      dormitoryOutReason,
      manualView
    } = this.state;

    const {
      _handleDormitoryOutInfo,
      _handleSubmitDormitoryOut,
      _handleManualView
    } = this;
    return (
      <DormitoryPresenter
        collegeStudentId={collegeStudentId}
        collegeStudentPwd={collegeStudentPwd}
        dormitoryOutStartDay={dormitoryOutStartDay}
        dormitoryOutEndtDay={dormitoryOutEndtDay}
        dormitoryOutReason={dormitoryOutReason}
        manualView={manualView}
        handleDormitoryOutInfo={_handleDormitoryOutInfo}
        handleSubmitDormitoryOut={_handleSubmitDormitoryOut}
        handleManualView={_handleManualView}
      />
    );
  }
}

export default DormitoryContainer;
