import React from "react";
import PropTypes from "prop-types";
import FeedPresenter from "../Feed/FeedPresenter";

const SearchPresenter = ({ searchTerm, loading, postList }) => {
  return (
    <FeedPresenter
      searchTerm={searchTerm}
      loading={loading}
      feed={postList}
    ></FeedPresenter>
  );
};

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  postList: PropTypes.array,
  searchTerm: PropTypes.string
};

export default SearchPresenter;
