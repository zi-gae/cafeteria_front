import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";

const FeedPresenter = props => {
  const { loading } = props;
  if (loading) {
    return <Loading />;
  }
};

FeedPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default FeedPresenter;
