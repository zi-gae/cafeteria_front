import React from "react";
import styles from "./styles.scss";
import { ClassicSpinner } from "react-spinners-kit";

const index = props => {
  return (
    <div className={styles.feed}>
      <ClassicSpinner size={30} color="#686769" />
    </div>
  );
};
export default index;
