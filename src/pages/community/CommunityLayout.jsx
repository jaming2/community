import { Outlet, NavLink } from "react-router-dom";
import styles from "./CommunityLayout.module.css";

export default function CommunityLayout() {
  return (
    <main className={styles.layout}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <nav>
            <section>
              <h2>수학 커뮤니티</h2>
              <ul>
                <li><NavLink to="/community/math/basic" className={({ isActive }) => isActive ? styles.active : undefined}>수1 수2 미적분</NavLink></li>
                <li><NavLink to="/community/math/questions" className={({ isActive }) => isActive ? styles.active : undefined}>질문 게시판</NavLink></li>
                <li><NavLink to="/community/math/tips" className={({ isActive }) => isActive ? styles.active : undefined}>팁 게시판</NavLink></li>
                <li><NavLink to="/community/math/info" className={({ isActive }) => isActive ? styles.active : undefined}>정보 게시판</NavLink></li>
                <li><NavLink to="/community/math/challenge" className={({ isActive }) => isActive ? styles.active : undefined}>문제 도전!</NavLink></li>
              </ul>
            </section>
            <section>
              <h2>과학 커뮤니티</h2>
              <ul>
                <li><NavLink to="/community/science/basic" className={({ isActive }) => isActive ? styles.active : undefined}>물리 화학 생명 지구</NavLink></li>
                <li><NavLink to="/community/science/questions" className={({ isActive }) => isActive ? styles.active : undefined}>질문 게시판</NavLink></li>
                <li><NavLink to="/community/science/tips" className={({ isActive }) => isActive ? styles.active : undefined}>팁 게시판</NavLink></li>
                <li><NavLink to="/community/science/info" className={({ isActive }) => isActive ? styles.active : undefined}>정보 게시판</NavLink></li>
                <li><NavLink to="/community/science/challenge" className={({ isActive }) => isActive ? styles.active : undefined}>문제 도전!</NavLink></li>
              </ul>
            </section>
          </nav>
        </aside>
        <section className={styles.content}>
          <Outlet />
        </section>
      </div>
    </main>
  );
}
