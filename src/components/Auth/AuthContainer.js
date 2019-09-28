import React, { Component } from "react";
import AuthPresenter from "./AuthPresenter";

class AuthContainer extends Component {
  constructor() {
    super();
    this.state = {
      account: true
    };
  }

  _changeAction = () => {
    this.setState((prevState, props) => {
      const { account } = prevState;
      if (account === true) {
        return { account: false };
      } else if (account === false) {
        return { account: true };
      }
    });
  };
  render() {
    const { account } = this.state;

    return (
      <AuthPresenter account={account} changeAction={this._changeAction} />
    );
  }
}

export default AuthContainer;
