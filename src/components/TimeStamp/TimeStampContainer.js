import React from "react";
import TimeStampPresenter from "./TimeStampPresenter";

const TimeStampContainer = props => {
  let { time } = props;
  const { format } = props;
  time = time.replace("ago", "이전");

  return <TimeStampPresenter format={format} time={time}></TimeStampPresenter>;
};

export default TimeStampContainer;
