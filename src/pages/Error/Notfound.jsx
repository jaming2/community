import styles from "./Notfound.module.css";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404. 페이지를 찾을 수 없습니다.</h1>
      <p className={styles.message}>
        요청하신 페이지를 찾을 수 없습니다. 주소를 다시 확인해 주세요.
      </p>
      <Link to="/" className={styles.link}>홈페이지로 이동</Link>
    </main>
  );
}
