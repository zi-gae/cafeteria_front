import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import styled from "styled-components";

const TimeStamp = styled.span`
  color: #737373;
  margin-top: ${props => (props.title ? "5px" : "15px")};
  margin-bottom: 10px;
  display: block;
  font-size: 13px;
`;

const TimeStampPresenter = ({ title, time }) => (
  <TimeStamp title={title}>{time}</TimeStamp>
);
TimeStampPresenter.propTypes = {
  time: PropTypes.string.isRequired
};

export default TimeStampPresenter;
