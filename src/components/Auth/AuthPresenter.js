import React from "react";
import styles from "./styles.scss";
import styled from "styled-components";
import SignupForm from "components/SignupForm";
import LoginForm from "components/LoginForm";

const Container = styled.div``;
const LogoBox = styled.div``;
const FormBox = styled.div``;
const Img = styled.img``;
const AppStore = styled.div``;
const Text = styled.span``;
const AppBox = styled.div``;
const WhiteBox = styled.div``;

const AuthPresenter = (props, context) => {
  const { account, changeAction } = props;
  return (
    <Container className={styles.auth}>
      <FormBox className={styles.column}>
        <WhiteBox className={`${styles.whiteBox} ${styles.formBox}`}>
          <LogoBox className={styles.logo}>
            <Img src={require("images/logo.png")} alt="" />
          </LogoBox>
          {account ? <LoginForm /> : <SignupForm />}
        </WhiteBox>
        <WhiteBox className={styles.whiteBox}>
          {account ? (
            <Text>
              동명대 학식이 처음이신가요?{" "}
              <Text className={styles.changeLink} onClick={changeAction}>
                회원가입
              </Text>
            </Text>
          ) : (
            <Text>
              계정이 있으신가요?{" "}
              <Text className={styles.changeLink} onClick={changeAction}>
                로그인
              </Text>
            </Text>
          )}
        </WhiteBox>
        <AppBox className={styles.appBox}>
          <AppStore className={styles.appstore}>
            <Img src={require("images/ios_download.png")} alt="" />
            <Img src={require("images/android_download.png")} alt="" />
          </AppStore>
        </AppBox>
      </FormBox>
    </Container>
  );
};

export default AuthPresenter;
