import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import PostActions from "components/PostActions";
import PostComments from "components/PostComments";
import PostInputActions from "components/PostInputActions";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";
import PostInputBox from "components/PostInputBox";
import styled from "styled-components";

const Container = styled.div``;
const Header = styled.div``;
const ImgBox = styled.div``;
const Img = styled.img``;
const HeaderColumn = styled.div``;
const Creator = styled.span``;
const PostBox = styled.div``;
const Title = styled.div``;
const Content = styled.div``;
const Action = styled.div``;
const PostUpdateMenu = styled.span``;

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
  id,
  anonymous,
  update,
  handlePostDelete,
  handlePostUpdate,
  handleUpdateConditon,
  handleWriteState
}) => {
  return update ? (
    <PostInputBox
      inputPost={true}
      anonymous={anonymous}
      title={title}
      content={content}
      file={file}
      handlePostUpdate={handlePostUpdate}
      handleWriteState={handleWriteState}
      handlePostDelete={handlePostDelete}
    />
  ) : (
    <Container className={styles.feedPost}>
      <Header className={styles.header}>
        <HeaderColumn className={styles.headerColumn}>
          <Img
            className={styles.image}
            src={creator.profile_image || require("images/noProfile.png")}
            alt={creator.username}
          />
          {anonymous ? (
            <Creator className={styles.creator}>
              {creator.name}
              <TimeStamp time={naturalTime}></TimeStamp>
            </Creator>
          ) : (
            <Creator className={styles.creator}>
              익명이<TimeStamp time={naturalTime}></TimeStamp>
            </Creator>
          )}
        </HeaderColumn>
        <PostUpdateMenu className={styles.postMenu}>
          <span className={styles.menu} onClick={handleUpdateConditon}>
            수정
          </span>
          <span className={styles.menu} onClick={handlePostDelete}>
            삭제
          </span>
        </PostUpdateMenu>
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
        <CommentBox postId={id}></CommentBox>
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
  commentCount: PropTypes.number.isRequired,
  anonymous: PropTypes.bool.isRequired,
  handlePostUpdate: PropTypes.func.isRequired
};

export default FeedPostPresenter;
