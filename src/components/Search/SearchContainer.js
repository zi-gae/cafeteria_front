import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import PropTypes from "prop-types";

class SearchContainer extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    searchByTerm: PropTypes.func.isRequired,
    postList: PropTypes.array
  };
  componentDidMount() {
    const { searchByTerm } = this.props;
    searchByTerm();
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.postList) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { postList } = this.props;
    return <SearchPresenter {...this.state} postList={postList} />;
  }
}

export default SearchContainer;
