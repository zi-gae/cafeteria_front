import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import PostActions from "components/PostActions";
import PostComments from "components/PostComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";
import styled from "styled-components";

const Container = styled.div``;
const Header = styled.header``;
const Img = styled.img``;
const HeaderColumn = styled.div``;
const Creator = styled.span``;
const PostBox = styled.div``;
const Title = styled.div``;
const Content = styled.div``;
const ImgBox = styled.div``;
const Action = styled.div``;

const FeedPostPresenter = ({
  title,
  content,
  creator,
  file,
  likeCount,
  comments,
  naturalTime,
  isLiked,
  updated_at,
  commentCount,
  id
}) => {
  return (
    <Container className={styles.feedPost}>
      <Header className={styles.header}>
        <Img
          className={styles.image}
          src={creator.profile_image || require("images/noProfile.png")}
          alt={creator.username}
        />
        <HeaderColumn className={styles.headerColumn}>
          <Creator className={styles.creator}>{creator.username}</Creator>
          <TimeStamp time={naturalTime}></TimeStamp>
        </HeaderColumn>
      </Header>
      <PostBox className={styles.postBox}>
        <Title className={styles.title}>{title}</Title>
        <Content className={styles.content}>{content} </Content>
        <ImgBox className={styles.imageBox}>
          {file ? (
            <Img className={styles.postImg} src={file} alt={content} />
          ) : null}
        </ImgBox>
      </PostBox>
      <Action className={styles.meta}>
        <PostActions
          likeCount={likeCount}
          commentCount={commentCount}
          isLiked={isLiked}
          postId={id}
        />
        <PostComments comments={comments}></PostComments>
        <CommentBox></CommentBox>
      </Action>
    </Container>
  );
};

FeedPostPresenter.propTypes = {
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }),
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  file: PropTypes.string,
  likeCount: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      natural_time: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  naturalTime: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired
};

export default FeedPostPresenter;
