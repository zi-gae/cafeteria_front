import React from "react";
import Textarea from "react-textarea-autosize";
import styles from "./styles.scss";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdAttachFile
} from "react-icons/md";
import { TiPencil } from "react-icons/ti";
const Container = styled.div``;
const PostInputBox = styled.div``;
const PostContent = styled.div``;
const TextareaBox = styled.div``;

const PostInputBoxPresenter = ({ handleInputPost, inputPost, anonymous }) => {
  return (
    <Container className={styles.container}>
      {!inputPost ? (
        <Sample></Sample>
      ) : (
        <PostInputBox className={styles.commentBox}>
          <div className={styles.content} onClick={handleInputPost}>
            새 글을 작성해주세요
          </div>
        </PostInputBox>
      )}
    </Container>
  );
};

const Sample = () => {
  return (
    <PostContent className={styles.postContent}>
      <div>
        <TextareaBox className={styles.textareaBox}>
          <Textarea className={styles.title} placeholder="제목"></Textarea>
        </TextareaBox>
      </div>
      <div>
        <TextareaBox className={styles.textareaBox}>
          <Textarea
            className={styles.textarea}
            placeholder="이곳을 눌러 글을 작성하세요"
          ></Textarea>
        </TextareaBox>
      </div>
      <div className={styles.icon}>
        <span className={styles.file}>
          <MdAttachFile color="#D3D3D3" size={20} />
        </span>
        <span className={styles.write}>
          <span className={styles.checkbox}>
            {anonymous ? (
              <MdCheckBoxOutlineBlank size={15} color="#D3D3D3" />
            ) : (
              <MdCheckBox size={15} color="#D3D3D3" />
            )}
          </span>
          익명
        </span>
        <span className={styles.pencil}>
          <TiPencil color="#73bb2b" size={25} />
        </span>
      </div>
    </PostContent>
  );
};

PostInputBoxPresenter.propTypes = {
  handleInputPost: PropTypes.func.isRequired,
  inputPost: PropTypes.bool.isRequired,
  anonymous: PropTypes.bool.isRequired
};

export default PostInputBoxPresenter;
