import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import PostCard from "./PostCard.jsx";
import { NavLink } from "react-router-dom";


export default function Home() {
  const recentPosts = [
    {
      id: 1,
      title: "리액트 훅스(Hooks) 완전 정복 가이드",
      content: "useState, useEffect, useContext 등 리액트 훅스의 모든 것을 알아봅니다.",
      author: "개발자A",
      date: "2025-07-07",
    },
    {
      id: 2,
      title: "자바스크립트 비동기 프로그래밍 마스터하기",
      content: "Promise, async/await을 활용한 비동기 처리의 핵심 개념을 다룹니다.",
      author: "코딩마스터",
      date: "2025-07-06",
    },
    {
      id: 3,
      title: "CSS Flexbox와 Grid, 언제 무엇을 써야 할까?",
      content: "레이아웃을 위한 Flexbox와 Grid의 장단점 및 활용 사례를 비교합니다.",
      author: "디자인고수",
      date: "2025-07-05",
    },
  ];

  return (
    <>
      <header className={styles.header}>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.logo}>
          <img src="/logo.png" alt="" style={{ height: '40px', paddingBottom: '0.1rem', filter: 'invert(1)' }} />
        </NavLink>
        <ul className={styles.menu}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>홈</NavLink></li>
          <li><NavLink to="/community" className={({ isActive }) => isActive ? styles.active : undefined}>커뮤니티</NavLink></li>
          <li><NavLink to="/qna" className={({ isActive }) => isActive ? styles.active : undefined}>문의사항</NavLink></li>
          <li><NavLink to="/resources" className={({ isActive }) => isActive ? styles.active : undefined}>자료실</NavLink></li>
        </ul>
        <ul className={styles.login}>
          <li><NavLink to="/login" className={({ isActive }) => isActive ? styles.active : undefined}>로그인</NavLink></li>
          <li><NavLink to="/signup" className={({ isActive }) => isActive ? styles.active : undefined}>회원가입</NavLink></li>
        </ul>
      </nav>
      </header>
      <section className={styles.hero}>
        <h1>이과들을 위한 커뮤니티 Dell</h1>
        <p>지식이 있어야 어쩌구 저쩌구</p>
        <Link to="/signup" className={styles.ctaBtn}>지금 가입하기</Link>
      </section>

      <section className={styles.recentPostsSection}>
        <h2>최신 게시물</h2>
        <div className={styles.postsGrid}>
          {recentPosts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              author={post.author}
              date={post.date}
            />
          ))}
        </div>
      </section>
    </>
  );
}
