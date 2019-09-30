import FeedPresenter from "./FeedPresenter";
import React, { Component } from "react";

class FeedContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  render() {
    const { loading } = this.state;
    return <FeedPresenter loading={loading} />;
  }
}

export default FeedContainer;
