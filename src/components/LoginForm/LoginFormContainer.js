import React, { Component } from "react";
import LoginFormPresenter from "./LoginFormPresenter";

class LoginFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  _handleInputChange = e => {
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
    const { username, password } = this.state;
    const { _handleInputChange, _handleSubmit } = this;
    return (
      <LoginFormPresenter
        username={username}
        password={password}
        handleInputChange={_handleInputChange}
        handleSubmit={_handleSubmit}
      />
    );
  }
}

export default LoginFormContainer;
