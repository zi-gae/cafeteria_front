import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import MdClose from "react-ionicons/lib/MdClose";
import styled from "styled-components";

const Container = styled.div``;
const Overlay = styled.div``;
const Box = styled.dic``;
const Hedaer = styled.div``;
const H4 = styled.div``;
const Content = styled.div``;

const ListPresenter = props => (
  <Container className={styles.container}>
    <Overlay className={styles.overlay} />
    <Box className={styles.box}>
      <Hedaer className={styles.header}>
        <H4>{props.title}</H4>
        <MdClose fontSize="20x" color="black" />
      </Hedaer>
      <Content className={styles.content}>
        {props.loading ? <Loading /> : null}
      </Content>
    </Box>
  </Container>
);

const LoadingListPresenter = props =>
  (ListPresenter.propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array
  });

export default ListPresenter;
