import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import styled from "styled-components";

const TimeStamp = styled.span``;

const TimeStampPresenter = ({ time }) => (
  <TimeStamp className={styles.time}>{time}</TimeStamp>
);

TimeStampPresenter.propTypes = {
  time: PropTypes.string.isRequired
};

export default TimeStampPresenter;
