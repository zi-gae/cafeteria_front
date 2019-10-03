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

  componentDidMount() {
    const { getFeed, feed } = this.props;
    if (!feed) {
      getFeed();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.feed) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { loading } = this.state;
    const { feed } = this.props;
    return <FeedPresenter loading={loading} feed={feed} />;
  }
}

export default FeedContainer;
