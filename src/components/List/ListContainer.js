import React, { Component } from "react";
import ListPresenter from "./ListPresenter";

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  render() {
    return <UserList {...this.props} {...this.state} />;
  }
}

export default ListContainer;
