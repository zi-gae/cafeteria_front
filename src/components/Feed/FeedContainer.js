import FeedPresenter from "./FeedPresenter";
import React, { Component } from "react";
import PropTypes from "prop-types";

class FeedContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  static propTypes = {
    getFeed: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    const { getFeed } = this.props;
    getFeed();
  };

  render() {
    const { loading } = this.state;
    return <FeedPresenter loading={loading} />;
  }
}

export default FeedContainer;
