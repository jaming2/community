import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>로그인</h2>
        <input className={styles.input} type="email" placeholder="아이디" />
        <input className={styles.input} type="password" placeholder="비밀번호" />
        <button className={styles.button} type="submit">로그인</button>
      </form>
    </div>
  );
}
