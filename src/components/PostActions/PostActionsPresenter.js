import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import styled from "styled-components";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosHeart from "react-ionicons/lib/IosHeart";
import IosTextOutline from "react-ionicons/lib/IosText";

const Container = styled.div``;
const IconContainer = styled.div``;
const Icon = styled.span``;

const PostActionsPresenter = ({ likeCount, commentCount }) => {
  return (
    <Container className={styles.actions}>
      <IconContainer className={styles.icons}>
        <Icon className={styles.icon}>
          {true ? (
            <Icon className={styles.heart}>
              <IosHeart fontSize="20px" color="#73bb2b" /> {likeCount}
            </Icon>
          ) : (
            <IosHeartOutline fontSize="20px" color="black" />
          )}
        </Icon>
        <Icon className={`${styles.comment} `}>
          <IosTextOutline fontSize="22px" color="#24A5AF" /> {commentCount}
        </Icon>
      </IconContainer>
    </Container>
  );
};

PostActionsPresenter.propTypes = {
  likeCount: PropTypes.number
};

export default PostActionsPresenter;
