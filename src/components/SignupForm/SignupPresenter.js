import React from "react";
import styles from "./styles.scss";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;
const Text = styled.span``;
const Form = styled.form``;
const InputId = styled.input``;
const InputName = styled.input``;
const InputPwd = styled.input``;
const InputBtn = styled.input``;
const InputUnivId = styled.input``;

const SignupPresenter = props => {
  const {
    stdntNumber,
    username,
    nickname,
    password,
    handleInputChage,
    handleSubmit
  } = props;
  return (
    <Container className={styles.formComponent}>
      <Text className={styles.forgotLink}>
        회원가입 하고 다양한 서비스를 즐기세요!
      </Text>
      <Text className={styles.divider}>and</Text>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <InputUnivId
          type="text"
          placeholder="학번"
          className={styles.textInput}
          onChange={handleInputChage}
          value={stdntNumber}
          name="stdntNumber"
        />
        <InputId
          type="text"
          placeholder="아이디"
          className={styles.textInput}
          onChange={handleInputChage}
          value={username}
          name="username"
        />
        <InputName
          type="username"
          placeholder="닉네임"
          className={styles.textInput}
          onChange={handleInputChage}
          value={nickname}
          name="nickname"
        />
        <InputPwd
          type="password"
          placeholder="비밀번호"
          className={styles.textInput}
          onChange={handleInputChage}
          value={password}
          name="password"
        />
        <InputBtn type="submit" value="회원가입" className={styles.button} />
      </Form>
    </Container>
  );
};

SignupPresenter.propTypes = {
  stdntNumber: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleInputChage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SignupPresenter;
