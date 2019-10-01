import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;
const Text = styled.span``;
const Form = styled.form``;
const InputId = styled.input``;
const Input = styled.input``;
const InputBtn = styled.input``;
const InputPwd = styled.input``;

const LoginFormPresenter = props => {
  const { username, password, handleInputChange, handleSubmit } = props;
  return (
    <Container className={styles.formComponent}>
      <Text className={styles.forgotLink}>
        비밀번호를 잊어버리셨나요?
        <a href="..."> find</a>
      </Text>
      <Text className={styles.divider}>or</Text>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" className={styles.textInput} />
        <InputId
          type="text"
          placeholder="아이디"
          className={styles.textInput}
          value={username}
          onChange={handleInputChange}
          name="username"
        />
        <InputPwd
          type="password"
          placeholder="비밀번호"
          className={styles.textInput}
          value={password}
          onChange={handleInputChange}
          name="password"
        />
        <Input type="text" className={styles.textInput} />
        <InputBtn type="submit" value="로그인" className={styles.button} />
      </Form>
    </Container>
  );
};

LoginFormPresenter.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default LoginFormPresenter;
