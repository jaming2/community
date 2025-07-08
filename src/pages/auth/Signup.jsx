import styles from "./Signup.module.css";

export default function Signup() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>회원가입</h2>
        <input className={styles.input} type="text" placeholder="사용자 이름" />
        <input className={styles.input} type="email" placeholder="아이디" />
        <input className={styles.input} type="password" placeholder="비밀번호" />
        <input className={styles.input} type="password" placeholder="비밀번호 확인" />
        <button className={styles.button} type="submit">회원가입</button>
      </form>
    </div>
  );
}
