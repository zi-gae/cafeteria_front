import React from "react";
import styles from "./styles.scss";

const LoginFormPresenter = props => (
  <div className={styles.formComponent}>
    <span className={styles.forgotLink}>비밀번호를 잊어버리셨나요?</span>
    <span className={styles.divider}>or</span>
    <form className={styles.form}>
      <input type="text" className={styles.textInput} />
      <input type="text" placeholder="아이디" className={styles.textInput} />
      <input
        type="password"
        placeholder="비밀번호"
        className={styles.textInput}
      />
      <input type="text" className={styles.textInput} />
      <input type="submit" value="로그인" className={styles.button} />
    </form>
  </div>
);

export default LoginFormPresenter;
