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
    const { getFeed, feed, getRice, rice } = this.props;
    if (rice) {
      getRice();
    }

    if (!feed) {
      getFeed();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  // 학식 크롤러 만들어야 된다 건우야!

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

    const keys = Object.keys(rice);
    let formattingRice = [];
    for (let i in keys) {
      if (rice[keys[i]].length > 0) {
        formattingRice.push([keys[i], ...rice[keys[i]]]);
      }
    }

    return (
      <FeedPresenter loading={loading} feed={feed} rice={formattingRice} />
    );
  }
}

export default FeedContainer;
