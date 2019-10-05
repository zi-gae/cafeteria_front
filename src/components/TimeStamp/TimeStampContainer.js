import React from "react";
import TimeStampPresenter from "./TimeStampPresenter";

const TimeStampContainer = ({ time }) => {
  time = time.replace("ago", "이전");
  return <TimeStampPresenter time={time}></TimeStampPresenter>;
};

export default TimeStampContainer;
