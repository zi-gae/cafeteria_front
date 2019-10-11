import React from "react";
import styles from "./styles.scss";
import styled from "styled-components";

const Container = styled.div``;
const Date = styled.div``;
const Header = styled.div``;
const SubHeader = styled.div``;
const MenuContainer = styled.div``;

const RicemenuPresenter = ({
  studentFoodStore,
  dormitoryFoodStore,
  professorFoodStore
}) => {
  return (
    <Container className={styles.container}>
      <Header className={styles.title}>
        TU RESTAURANT
        <Date className={styles.date}>2019-12-31</Date>
      </Header>
      <SubHeader className={styles.subHeader}>학생 식당</SubHeader>
      <MenuContainer className={styles.menuContainer}>
        {studentFoodStore.length > 0
          ? studentFoodStore.map((r, i) => (
              <div className={styles.list} key={i}>
                {r.map((rice, index) =>
                  index === 0 ? (
                    <span
                      className={`${styles.menu} ${styles.menuTitle}`}
                      key={index}
                    >
                      {rice}:{" "}
                    </span>
                  ) : (
                    <span className={styles.menu} key={index}>
                      {rice}{" "}
                    </span>
                  )
                )}
              </div>
            ))
          : "오늘 식단 없음"}
      </MenuContainer>
      <SubHeader className={styles.subHeader}>기숙사 식당</SubHeader>
      <MenuContainer className={styles.menuContainer}>
        {dormitoryFoodStore.length > 0
          ? dormitoryFoodStore.map((r, i) => (
              <div className={styles.list} key={i}>
                {r.map((rice, index) =>
                  index === 0 ? null : (
                    <span className={styles.menu} key={index}>
                      {rice}{" "}
                    </span>
                  )
                )}
              </div>
            ))
          : "오늘 식단 없음"}
      </MenuContainer>
      <SubHeader className={styles.subHeader}>교직원 식당</SubHeader>
      <MenuContainer className={styles.menuContainer}>
        {professorFoodStore.length > 0
          ? professorFoodStore.map((r, i) => (
              <div className={styles.list} key={i}>
                {r.map((rice, index) =>
                  index === 0 ? null : (
                    <span className={styles.menu} key={index}>
                      {rice}{" "}
                    </span>
                  )
                )}
              </div>
            ))
          : "오늘 식단 없음"}
      </MenuContainer>
    </Container>
  );
};

export default RicemenuPresenter;
