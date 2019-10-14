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
    const { getFeed, feed, getRice } = this.props;
    getRice();
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
    const { feed, rice } = this.props;

    let formattingRice = [];
    if (rice) {
      const keys = Object.keys(rice);
      for (let i in keys) {
        if (rice[keys[i]].length > 0) {
          formattingRice.push([keys[i], ...rice[keys[i]]]);
        }
      }
    }

    return (
      <FeedPresenter
        loading={this.props.loading ? this.props.loading : loading}
        feed={this.props.feedList ? this.props.feedList : feed}
        rice={formattingRice}
      />
    );
  }
}

export default FeedContainer;
