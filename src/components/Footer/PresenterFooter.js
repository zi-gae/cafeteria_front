import React from "react";
import styles from "./styles.scss";
import styled from "styled-components";

const Container = styled.footer``;
const Column = styled.div``;
const Nav = styled.div``;
const List = styled.ul``;
const Li = styled.li``;
const CopyRight = styled.span``;

const PresenterFooter = () => {
  return (
    <Container className={styles.footer}>
      <Column className={styles.colum}>
        <Nav className={styles.nav}>
          <List className={styles.list}>
            <Li className={styles.listItem}>
              <CopyRight className={styles.copyRight}>© 동명대학식이</CopyRight>
            </Li>
            <Li className={styles.listItem}>공지사항</Li>
            <Li className={styles.listItem}>문의하기</Li>
            <Li className={styles.listItem}>오픈소스</Li>
            <Li className={styles.listItem}>국가선택</Li>
            <Li className={styles.listItem}>커뮤니티이용규칙</Li>
          </List>
        </Nav>
      </Column>
    </Container>
  );
};

export default PresenterFooter;
