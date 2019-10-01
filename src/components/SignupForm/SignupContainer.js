import SignupPresenter from "./SignupPresenter";
import PropTypes from "prop-types";
import React, { Component } from "react";

class SignupContainer extends Component {
  constructor() {
    super();
    this.state = {
      stdntnum: "",
      username: "",
      email: "",
      password: ""
    };
  }

  static propTypes = {
    createAccount: PropTypes.func.isRequired
  };

  _handleInputChage = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = e => {
    const { stdntnum, username, email, password } = this.state;
    const { createAccount } = this.props;
    createAccount(username, password, stdntnum, email);
    e.preventDefault();
  };

  render() {
    const { stdntnum, username, email, password } = this.state;
    const { _handleInputChage, _handleSubmit } = this;

    return (
      <SignupPresenter
        stdntnum={stdntnum}
        username={username}
        email={email}
        password={password}
        handleInputChage={_handleInputChage}
        handleSubmit={_handleSubmit}
      />
    );
  }
}

export default SignupContainer;
