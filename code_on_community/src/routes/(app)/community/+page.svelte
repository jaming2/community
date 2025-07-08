<script lang="ts">
  let posts = [
    { id: 1, title: "세종대 수강신청 레전드 ㅋㅋ", author: "익명1", date: "06-09", views: 3021, likes: 112 },
    { id: 2, title: "이번 시험 망했다 진짜", author: "익명2", date: "06-09", views: 832, likes: 23 },
    { id: 3, title: "총장님께 편지 보냄 후기", author: "익명3", date: "06-09", views: 490, likes: 12 },
    { id: 4, title: "기숙사에서 일어난 일", author: "익명4", date: "06-09", views: 1021, likes: 58 },
    { id: 5, title: "학식 가격 오른 거 실화?", author: "익명5", date: "06-09", views: 390, likes: 7 },
    { id: 6, title: "교수님과 싸움 난 썰", author: "익명6", date: "06-09", views: 732, likes: 34 },
    { id: 7, title: "전공책 중고거래팁", author: "익명7", date: "06-09", views: 512, likes: 19 },
    { id: 8, title: "기말고사 시간표 떴다 ㄷㄷ", author: "익명8", date: "06-09", views: 1281, likes: 78 },
    { id: 9, title: "동아리 방 폐쇄된다던데", author: "익명9", date: "06-09", views: 843, likes: 44 },
    { id: 10, title: "과방에 에어컨 설치됨", author: "익명10", date: "06-09", views: 532, likes: 25 },
    { id: 11, title: "학식 메뉴 괜찮냐", author: "익명11", date: "06-09", views: 654, likes: 32 },
    { id: 12, title: "다들 장학금 얼마 받음?", author: "익명12", date: "06-09", views: 980, likes: 51 },
    { id: 13, title: "중도 자리 없어서 집감", author: "익명13", date: "06-09", views: 1120, likes: 60 },
    { id: 14, title: "학생회비 반환 언제?", author: "익명14", date: "06-09", views: 450, likes: 20 },
    { id: 15, title: "학교 셔틀버스 너무 붐빈다", author: "익명15", date: "06-09", views: 751, likes: 39 },
    { id: 16, title: "교수님 ppt 오타 개많음", author: "익명16", date: "06-09", views: 390, likes: 18 },
    { id: 17, title: "졸업요건 바뀌는거 실화임?", author: "익명17", date: "06-09", views: 843, likes: 29 },
    { id: 18, title: "올해 등록금 안오른다는데", author: "익명18", date: "06-09", views: 1782, likes: 90 },
    { id: 19, title: "모의면접 후기 공유함", author: "익명19", date: "06-09", views: 632, likes: 22 },
    { id: 20, title: "교양과목 추천좀", author: "익명20", date: "06-09", views: 849, likes: 40 },
    { id: 21, title: "수업 중 졸다가 걸림ㅋㅋ", author: "익명21", date: "06-09", views: 394, likes: 14 },
    { id: 22, title: "축제 라인업 공개됐냐?", author: "익명22", date: "06-09", views: 1520, likes: 88 },
    { id: 23, title: "교수님이 ppt 읽기만 함", author: "익명23", date: "06-09", views: 581, likes: 30 },
    { id: 24, title: "자취방 구하는 팁 있음?", author: "익명24", date: "06-09", views: 941, likes: 50 }
    // 필요하면 더 추가
  ];

  const postsPerPage = 20;
  let currentPage = 1;
  const totalPages = Math.ceil(posts.length / postsPerPage);

    function gotoPage(page: number) {
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
    }
    }


  function getPaginatedPosts() {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return posts.slice(start, end);
  }
</script>

<section class="post-list">
  <h1 class="section-title">자유게시판</h1>
  <table>
    <thead>
      <tr>
        <th>제목</th>
        <th>작성자</th>
        <th>날짜</th>
        <th>조회수</th>
        <th>추천</th>
      </tr>
    </thead>
    <tbody>
      {#each getPaginatedPosts() as post}
        <tr>
          <td class="title">
            <a href={`/post/${post.id}`}>{post.title}</a>
          </td>
          <td>{post.author}</td>
          <td>{post.date}</td>
          <td>{post.views}</td>
          <td>{post.likes}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <div class="pagination">
    <button on:click={() => gotoPage(1)} disabled={currentPage === 1}>&laquo;</button>
    <button on:click={() => gotoPage(currentPage - 1)} disabled={currentPage === 1}>&lsaquo;</button>

    {#each Array(totalPages).fill(0).map((_, i) => i + 1) as page}
      {#if Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages}
        <button class:active={page === currentPage} on:click={() => gotoPage(page)}>{page}</button>
      {:else if (page === 2 && currentPage > 4) || (page === totalPages - 1 && currentPage < totalPages - 3)}
        <span>...</span>
      {/if}
    {/each}

    <button on:click={() => gotoPage(currentPage + 1)} disabled={currentPage === totalPages}>&rsaquo;</button>
    <button on:click={() => gotoPage(totalPages)} disabled={currentPage === totalPages}>&raquo;</button>
  </div>
</section>

<style>
  /* #C8FF00 */

.post-list {
  background: #fff;
  padding: 30px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
}

.section-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  border-left: 5px solid #3b82f6;
  padding-left: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #f9f9f9;
  border-top: 2px solid #3b82f6;
  border-bottom: 1px solid #ddd;
}

th, td {
  padding: 16px 12px;
  text-align: left;
  font-size: 16px;
}

td.title a {
  color: #111;
  font-weight: 500;
  text-decoration: none;
}

td.title a:hover {
  text-decoration: underline;
}

tbody tr {
  border-bottom: 1px solid #eee;
}

tbody tr:hover {
  background-color: #f4f7ff;
}

th {
  font-weight: 700;
  font-size: 15px;
  color: #444;
}

/* 페이지네이션 */
.pagination {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.pagination button {
  background: #fff;
  border: 1px solid #d1d5db;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  min-width: 40px;
}

.pagination button:hover:not(.active) {
  background-color: #f0f0f0;
}

.pagination button.active {
  background-color: #3b82f6;
  color: #fff;
  border-color: #3b82f6;
  font-weight: bold;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination span {
  padding: 8px 12px;
  font-size: 15px;
  color: #888;
}
</style>
