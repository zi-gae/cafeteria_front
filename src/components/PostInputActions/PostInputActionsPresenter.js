import React from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import styles from "./styles.scss";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { TiPencil } from "react-icons/ti";
import PropTypes from "prop-types";

const PostContent = styled.div``;
const TextareaBox = styled.div``;

const PostInputActionsPresenter = ({
  anonymous,
  handleWriteState,
  handleWritePost,
  title,
  content,
  stateConditionHandler,
  fileUploadHandler
}) => {
  return (
    <PostContent className={styles.postContent}>
      <div>
        <TextareaBox className={styles.textareaBox}>
          <Textarea
            className={styles.title}
            placeholder="제목"
            value={title}
            onChange={handleWriteState}
            name="title"
          />
        </TextareaBox>
      </div>
      <div>
        <TextareaBox className={styles.textareaBox}>
          <Textarea
            className={styles.textarea}
            placeholder="이곳을 눌러 글을 작성하세요"
            value={content}
            onChange={handleWriteState}
            name="content"
          />
        </TextareaBox>
      </div>
      <div className={styles.icon}>
        <span className={styles.filebox}>
          <label htmlFor="ex_file" />
          <input
            type="file"
            id="ex_file"
            onChange={fileUploadHandler}
            multiple
            name="file"
          />
        </span>

        <span className={styles.write}>
          <span className={styles.checkbox}>
            {anonymous ? (
              <MdCheckBoxOutlineBlank
                onClick={stateConditionHandler}
                size={17}
                color="#D3D3D3"
                id="anonymous"
              />
            ) : (
              <MdCheckBox
                onClick={stateConditionHandler}
                size={17}
                color="#D3D3D3"
              />
            )}
          </span>
          익명
        </span>
        <span className={styles.pencil} onClick={handleWritePost}>
          <TiPencil color="white" size={28} />
        </span>
      </div>
    </PostContent>
  );
};

PostInputActionsPresenter.propTypes = {
  handleWriteState: PropTypes.func.isRequired,
  handleWritePost: PropTypes.func.isRequired,
  stateConditionHandler: PropTypes.func.isRequired,
  fileUploadHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default PostInputActionsPresenter;
