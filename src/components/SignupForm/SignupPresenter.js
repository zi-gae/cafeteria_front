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
    stdntnum,
    username,
    email,
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
        <InputId
          type="text"
          placeholder="아이디"
          className={styles.textInput}
          onChange={handleInputChage}
          value={username}
          name="username"
        />
        <InputPwd
          type="password"
          placeholder="비밀번호"
          className={styles.textInput}
          onChange={handleInputChage}
          value={password}
          name="password"
        />
        <InputPwd
          type="text"
          placeholder="닉네임"
          className={styles.textInput}
          onChange={handleInputChage}
          value={nickname}
          name="nickname"
        />
        <InputUnivId
          type="text"
          placeholder="학번"
          className={styles.textInput}
          onChange={handleInputChage}
          value={stdntnum}
          name="stdntnum"
        />
        <InputName
          type="email"
          placeholder="이메일"
          className={styles.textInput}
          onChange={handleInputChage}
          value={email}
          name="email"
        />
        <InputBtn type="submit" value="회원가입" className={styles.button} />
      </Form>
    </Container>
  );
};

SignupPresenter.propTypes = {
  stdntnum: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  handleInputChage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SignupPresenter;
