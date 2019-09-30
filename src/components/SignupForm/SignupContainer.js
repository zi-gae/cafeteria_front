import SignupPresenter from "./SignupPresenter";

import React, { Component } from "react";

class SignupContainer extends Component {
  constructor() {
    super();

    this.state = {
      stdntNumber: "",
      username: "",
      nickname: "",
      password: ""
    };
  }
  _handleInputChage = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { stdntNumber, username, nickname, password } = this.state;
    const { _handleInputChage, _handleSubmit } = this;

    return (
      <SignupPresenter
        stdntNumber={stdntNumber}
        username={username}
        nickname={nickname}
        password={password}
        handleInputChage={_handleInputChage}
        handleSubmit={_handleSubmit}
      />
    );
  }
}

export default SignupContainer;
