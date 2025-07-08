import { Outlet } from "react-router-dom";
import styles from "./Page.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const mainStyle = {
  padding: '20px',
  minHeight: 'calc(100vh - 140px)', /* 헤더(60px)와 푸터(80px) 높이를 고려하여 최소 높이 설정 */
};

export default function PageLayout() {
  return (
    <div>
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
          <p>이과 커뮤니티 Dell</p>
        </NavLink>

        <ul className={styles.navLinks}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>홈</NavLink></li>
          <li><NavLink to="/community" className={({ isActive }) => isActive ? styles.active : undefined}>커뮤니티</NavLink></li>
          <li><NavLink to="/qna" className={({ isActive }) => isActive ? styles.active : undefined}>문의사항</NavLink></li>
          <li><NavLink to="/resources" className={({ isActive }) => isActive ? styles.active : undefined}>자료실</NavLink></li>
          
        </ul>

        <div className={styles.navRight}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="통합검색" />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>

          <div className={styles.authLinks}>
            <NavLink to="/login" className={styles.authLink}>로그인</NavLink>
            <NavLink to="/signup" className={styles.authLink}>회원가입</NavLink>
          </div>
        </div>
      </nav>
    </header>
      <main style={mainStyle}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>© 2025 이과 커뮤니티 | All Rights Reserved</p>
      </footer>
    </div>
  );
}