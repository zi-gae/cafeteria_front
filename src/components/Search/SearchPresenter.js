import React from "react";
import PropTypes from "prop-types";
import FeedPresenter from "../Feed/FeedPresenter";
import Feed from "components/Feed";

const SearchPresenter = ({ searchTerm, loading, postList }) => {
  return <Feed searchTerm={searchTerm} loading={loading} feedList={postList} />;
};

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  postList: PropTypes.array,
  searchTerm: PropTypes.string
};

export default SearchPresenter;
