import React from "react";
import styles from "./styles.scss";

const SignupPresenter = props => (
  <div className={styles.formComponent}>
    <span className={styles.forgotLink}>비밀번호를 잊어버리셨나요?</span>
    <span className={styles.divider}>or</span>
    <form className={styles.form}>
      <input type="text" placeholder="학번" className={styles.textInput} />
      <input type="text" placeholder="아이디" className={styles.textInput} />
      <input
        type="username"
        placeholder="닉네임"
        className={styles.textInput}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className={styles.textInput}
      />
      <input type="submit" value="회원가입" className={styles.button} />
    </form>
  </div>
);

export default SignupPresenter;
