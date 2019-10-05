import React from "react";

const TimeStampPresenter = ({ time, format }) => {
  if (format === "comment") {
    return <span>{time}</span>;
  } else if (format === "post") {
    return <div>{time}</div>;
  }
};

export default TimeStampPresenter;
