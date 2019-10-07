import React from "react";
import PropTypes from "prop-types";
import FeedPresenter from "../Feed/FeedPresenter";
import Loading from "components/Loading";

const SearchPresenter = ({ loading, postList }) => {
  return <FeedPresenter loading={loading} feed={postList}></FeedPresenter>;
};

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  postList: PropTypes.array
};

export default SearchPresenter;
