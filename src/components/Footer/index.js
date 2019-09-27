import React from "react";
import styles from "./styles.scss";

const Footer = (props, context) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.colum}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.copyRight}>© 동명대학식이</span>
            </li>
            <li className={styles.listItem}>공지사항</li>
            <li className={styles.listItem}>문의하기</li>
            <li className={styles.listItem}>오픈소스</li>
            <li className={styles.listItem}>국가선택</li>
            <li className={styles.listItem}>커뮤니티이용규칙</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
