import React from "react";
import styles from "./styles.scss";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaBook } from "react-icons/fa";

const Container = styled.div``;
const LogoBox = styled.div``;
const FormBox = styled.div``;
const Img = styled.img``;
const WhiteBox = styled.div``;
const LoginContainer = styled.div``;
const LoginText = styled.span``;
const Form = styled.form``;
const InputId = styled.input``;
const InputName = styled.input``;
const InputPwd = styled.input``;
const InputBtn = styled.input``;
const InputUnivId = styled.input``;
const MenuHeader = styled.div``;

const DormitoryPresenter = ({
  collegeStudentId,
  collegeStudentPwd,
  dormitoryOutStartDay,
  dormitoryOutEndtDay,
  dormitoryOutReason,
  manualView,
  handleDormitoryOutInfo,
  handleSubmitDormitoryOut,
  handleManualView
}) => {
  return (
    <Container className={styles.auth}>
      <FormBox className={styles.column}>
        <WhiteBox className={`${styles.whiteBox} ${styles.formBox}`}>
          <LogoBox className={styles.logo}>
            <Img src={require("images/tu_logo.png")} alt="" />
            <LoginContainer className={styles.formComponent}>
              <LoginText className={styles.infoContent}>
                외박신청 이제는 간단하게 진행해보세요!
                <MenuHeader
                  className={styles.menuHeader}
                  onClick={handleManualView}
                >
                  <FaBook /> 사용법
                </MenuHeader>
                {manualView ? <Manual /> : null}
              </LoginText>
              <LoginText className={styles.divider}>동명 생활관</LoginText>
              <Form className={styles.form} onSubmit={handleSubmitDormitoryOut}>
                <InputId
                  type="text"
                  placeholder="아이디"
                  className={styles.textInput}
                  onChange={handleDormitoryOutInfo}
                  name="collegeStudentId"
                  value={collegeStudentId}
                />
                <InputPwd
                  type="password"
                  placeholder="비밀번호"
                  className={styles.textInput}
                  onChange={handleDormitoryOutInfo}
                  name="collegeStudentPwd"
                  value={collegeStudentPwd}
                />
                <InputPwd
                  type="text"
                  placeholder="외박 시작 일자"
                  className={styles.textInput}
                  onChange={handleDormitoryOutInfo}
                  name="dormitoryOutStartDay"
                  value={dormitoryOutStartDay}
                />
                <InputUnivId
                  type="text"
                  placeholder="외박 종료 일자"
                  className={styles.textInput}
                  onChange={handleDormitoryOutInfo}
                  name="dormitoryOutEndtDay"
                  value={dormitoryOutEndtDay}
                />
                <InputName
                  type="text"
                  placeholder="외박 사유"
                  className={styles.textInput}
                  onChange={handleDormitoryOutInfo}
                  name="dormitoryOutReason"
                  value={dormitoryOutReason}
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

const Manual = () => {
  return (
    <div className={styles.manualBox}>
      <div className={styles.manual}>
        <div className={styles.item}>아이디: 14110088</div>
        <div className={styles.item}>비밀번호: my password</div>
        <div className={styles.item}>시작일자: 21</div>
        <div className={styles.item}>종료일자: 24</div>
        <div className={styles.item}>외박사유: 명절</div>
        <div className={styles.item}>결과: 당일 월 21~24일 외박신청</div>
      </div>
    </div>
  );
};

DormitoryPresenter.propTypes = {
  collegeStudentId: PropTypes.string.isRequired,
  collegeStudentPwd: PropTypes.string.isRequired,
  dormitoryOutStartDay: PropTypes.string.isRequired,
  dormitoryOutEndtDay: PropTypes.string.isRequired,
  dormitoryOutReason: PropTypes.string.isRequired,
  handleDormitoryOutInfo: PropTypes.func.isRequired
};

export default DormitoryPresenter;
