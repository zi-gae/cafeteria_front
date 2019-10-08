import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import PropTypes from "prop-types";

class SearchContainer extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    searchByTerm: PropTypes.func.isRequired,
    postList: PropTypes.array,
    searchTerm: PropTypes.string
  };
  componentDidMount() {
    const { searchByTerm } = this.props;
    searchByTerm();
  }
  componentDidUpdate(nextProps) {
    const {
      searchByTerm,
      match: { params }
    } = this.props;
    if (nextProps.match.params !== params) {
      searchByTerm();
    }
  }
  componentWillReceiveProps = nextProps => {
    const { searchByTerm, pathname } = this.props;
    if (nextProps.postList) {
      this.setState({
        loading: false
      });
    }
    if (nextProps.pathname !== pathname) {
      searchByTerm();
    }
  };
  render() {
    const { postList, searchTerm } = this.props;
    const { loading } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        postList={postList}
        searchTerm={searchTerm}
      />
    );
  }
}

export default SearchContainer;
