import React from "react";
import styles from "./styles.scss";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;
const LogoBox = styled.div``;
const FormBox = styled.div``;
const Img = styled.img``;
const Text = styled.span``;
const WhiteBox = styled.div``;

const LoginContainer = styled.div``;
const LoginText = styled.span``;
const Form = styled.form``;
const InputId = styled.input``;
const InputName = styled.input``;
const InputPwd = styled.input``;
const InputBtn = styled.input``;
const InputUnivId = styled.input``;

const DormitoryPresenter = () => {
  return (
    <Container className={styles.auth}>
      <FormBox className={styles.column}>
        <WhiteBox className={`${styles.whiteBox} ${styles.formBox}`}>
          <LogoBox className={styles.logo}>
            <Img src={require("images/tu_logo.png")} alt="" />
            <LoginContainer className={styles.formComponent}>
              <LoginText className={styles.forgotLink}>
                외박신청 이제는 간단하게 진행해보세요!
              </LoginText>
              <LoginText className={styles.divider}>동명 생활관</LoginText>
              <Form className={styles.form} onSubmit={null}>
                <InputId
                  type="text"
                  placeholder="아이디"
                  className={styles.textInput}
                  onChange={null}
                  name="username"
                />
                <InputPwd
                  type="password"
                  placeholder="비밀번호"
                  className={styles.textInput}
                  onChange={null}
                  name="password"
                />
                <InputPwd
                  type="text"
                  placeholder="외박 시작 일자"
                  className={styles.textInput}
                  onChange={null}
                  name="exitStartDay"
                />
                <InputUnivId
                  type="text"
                  placeholder="외박 종료 일자"
                  className={styles.textInput}
                  onChange={null}
                  name="exitEndDay"
                />
                <InputName
                  type="text"
                  placeholder="외박 사유"
                  className={styles.textInput}
                  onChange={null}
                  name="exitReason"
                />
                <InputBtn
                  value="외박신청"
                  type="submit"
                  className={styles.button}
                />
              </Form>
            </LoginContainer>
          </LogoBox>
        </WhiteBox>
      </FormBox>
    </Container>
  );
};

export default DormitoryPresenter;
