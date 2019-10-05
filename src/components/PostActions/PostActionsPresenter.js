import React from "react";
import PropTypes from "prop-types";
// import styles from "./styles.scss";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";

const PostActionsPresenter = ({ likeCount }) => {
  return (
    <div>
      <div>
        <span>
          <IosHeartOutline fontSize="28px" color="black" />
        </span>
        <span>
          <IosTextOutline fontSize="28px" color="black" />
        </span>
      </div>
      <span>{`${likeCount} 좋아요`} </span>
    </div>
  );
};

PostActionsPresenter.propTypes = {
  likeCount: PropTypes.number
};

export default PostActionsPresenter;
