import React from "react";
import IosAlarmOutline from "react-ionicons/lib/IosAlarmOutline";
import IosExitOutline from "react-ionicons/lib/IosExitOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;
const Inner = styled.div``;
const Column = styled.div``;
const ComboBox = styled.select``;
const Option = styled.option``;
const Search = styled.input``;
const NavIcon = styled.div``;
const Form = styled.form``;

const NavigationPresenter = ({ value, onInputChange, onSubmit }) => {
  return (
    <Container className={styles.navigation}>
      <Inner className={styles.inner}>
        <Column className={styles.column}>
          <Link to="/">
            <img
              src={require("images/logo.png")}
              className={styles.logo}
              alt="logo"
            />
          </Link>
        </Column>
        <Column className={styles.column}>
          <ComboBox name="type " className={styles.searchChoice}>
            <Option value="">게시판 선택</Option>
            <Option value="free">자유게시판</Option>
            <Option value="major">전공게시판</Option>
            <Option value="used">중고장터</Option>
          </ComboBox>
          <Form onSubmit={onSubmit}>
            <Search
              type="text"
              className={styles.searchInput}
              placeholder="검색"
              onChange={onInputChange}
              value={value}
            />
          </Form>
        </Column>
        <Column className={styles.column}>
          <NavIcon className={styles.navIcon}>
            <Link to="/explore">
              <IosExitOutline fontSize="40px" color="black" />
            </Link>
          </NavIcon>
          <NavIcon className={styles.navIcon}>
            <IosAlarmOutline fontSize="28px" color="black" />
          </NavIcon>
          <NavIcon className={styles.navIcon}>
            <Link to="/profile">
              {<IosPersonOutline fontSize="32px" color="black" />}
            </Link>
          </NavIcon>
        </Column>
      </Inner>
    </Container>
  );
};

NavigationPresenter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default NavigationPresenter;
