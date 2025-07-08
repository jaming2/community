<script>
</script>

<main class="layout">
  <div class="container">
    <aside class="sidebar">
      <nav>
        <section>
          <h2>수학 커뮤니티</h2>
          <ul>
            <li><a href="/math/basic">수1 수2 미적분</a></li>
            <li><a href="/math/questions">질문 게시판</a></li>
            <li><a href="/math/tips">팁 게시판</a></li>
            <li><a href="/math/info">정보 게시판</a></li>
            <li><a href="/math/challenge">문제 도전!</a></li>
          </ul>
        </section>
        <section>
          <h2>과학 커뮤니티</h2>
          <ul>
            <li><a href="/science/basic">물리 화학 생명 지구</a></li>
            <li><a href="/science/questions">질문 게시판</a></li>
            <li><a href="/science/tips">팁 게시판</a></li>
            <li><a href="/science/info">정보 게시판</a></li>
            <li><a href="/science/challenge">문제 도전!</a></li>
          </ul>
        </section>
      </nav>
    </aside>
    <section class="content">
      <slot />
    </section>
  </div>
</main>

<style>
:root {
  --container-width: 1200px;
  --background-color: #f5f5f5;
  --content-bg: #fff;
  --link-color: #333;
  --link-hover-color: #000;
}

.layout {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 30px;
  background-color: var(--background-color);
  top: 0;
  z-index: 200;
}

.container {
  width: var(--container-width);
  display: flex;
  gap: 20px;
}

/* 사이드바 */
.sidebar {
  width: 220px;
  background-color: var(--content-bg);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  height: fit-content;
  position: sticky;
  top: 106px;
}

.sidebar h2 {
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: bold;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin: 10px 0;
}

.sidebar a {
  text-decoration: none;
  color: var(--link-color);
  font-size: 15px;
}

.sidebar a:hover {
  color: var(--link-hover-color);
  font-weight: 500;
}

/* 본문 */
.content {
  flex: 1;
  background-color: var(--content-bg);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  min-height: 80vh;
}
</style>
