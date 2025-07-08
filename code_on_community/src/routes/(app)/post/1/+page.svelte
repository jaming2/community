<script lang="ts">
  export let post = {
    title: "세종대 수강신청 레전드 ㅋㅋ",
    author: "노미현",
    date: "06-09",
    views: 3021,
    likes: 112,
    content: `
      <p>오늘 수강신청 하다가 진짜 눈물 나옴ㅋㅋ</p>
      <p>10시에 시작인데 서버 터져서 10분 뒤에 접속됨;</p>
      <p>결과는? 전공 하나도 못 넣음ㅋㅋㅋ</p>
      <p><img src="https://i.ytimg.com/vi/WWeZj5VZWMg/maxresdefault.jpg" alt="수강신청 실패 이미지"></p>
      <p>다른 사람들은 어땠음?</p>
    `
  };

  let userLike = false;
  let likeCount = post.likes;

  function toggleLike() {
    userLike ? likeCount-- : likeCount++;
    userLike = !userLike;
  }

  let comments = [
    { id: 1, author: "보랑이호지", content: "ㅋㅋㅋ 나도 못 넣음...", date: "2025-06-11 15:45:32" },
    { id: 2, author: "섹스톤", content: "진짜 이젠 운빨임", date: "2025-06-11 15:48:20" },
    { id: 3, author: "ㅇㅇ(223.53)", content: "병신ㅋㅋ 지가 못 한거면서 남탓은ㅋㅋㅋ 역시 배급견들 남탓 없으면 못 살아~", date: "2025-06-11 15:49:35" }
  ];

  let newComment = "";

  function addComment() {
    if (newComment.trim()) {
      const now = new Date();
      const formatted = now.toISOString().slice(0, 16).replace("T", " ");
      comments = [
        ...comments,
        { id: comments.length + 1, author: "익명", content: newComment, date: formatted }
      ];
      newComment = "";
    }
  }
</script>

<section class="post-detail">
  <div class="board-info">자유게시판</div>

  <h1 class="post-title">{post.title}</h1>

  <div class="post-meta">
    <span>{post.author}</span>
    <span>{post.date}</span>
    <span>조회수 {post.views}</span>
  </div>

  <div class="separator"></div>

  <div class="post-content">
    {@html post.content}
  </div>

  <div class="post-actions">
    <button class:active={userLike} on:click={toggleLike}>👍 추천 {likeCount}</button>
  </div>

  <div class="comment-section">
    <h2>댓글</h2>
    <textarea bind:value={newComment} placeholder="댓글을 입력하세요..."></textarea>
    <button on:click={addComment}>등록</button>

    <ul class="comment-list">
      {#each comments as comment}
        <li class="comment-item">
          <div class="comment-meta">
            <span class="comment-author">{comment.author}</span>
            <span class="comment-timestamp">{comment.date}</span>
          </div>
          <div class="comment-body">{comment.content}</div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .post-detail {
    background: #fff;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    max-width: 800px;
    margin: 2rem auto;
  }

  .board-info {
    font-size: 14px;
    color: #888;
    margin-bottom: 0.5rem;
    border-left: 4px solid #3b82f6;
    padding-left: 10px;
  }

  .post-title {
    font-size: 26px;
    font-weight: bold;
    color: #222;
    margin-bottom: 0.3rem;
  }

  .post-meta {
    font-size: 14px;
    color: #666;
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }

  .separator {
    border-bottom: 1px solid #e0e0e0;
    margin: 0.5rem 0 1.5rem 0;
  }

  :global(.post-content p) {
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #222;
  }

  :global(.post-content img) {
    max-width: 100%;
    margin: 1rem 0;
    border-radius: 6px;
  }

  .post-actions {
    margin: 2rem 0;
  }

  .post-actions button {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }

  .post-actions button.active,
  .post-actions button:hover {
    background: #2563eb;
  }

  .comment-section {
    margin-top: 3rem;
  }

  .comment-section textarea {
    width: 100%;
    height: 80px;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-bottom: 1rem;
    font-size: 15px;
    resize: vertical;
  }

  .comment-section button {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
  }

  .comment-section button:hover {
    background: #2563eb;
  }

  .comment-list {
    list-style: none;
    padding: 0;
    margin-top: 1.5rem;
  }

  .comment-item {
    border-top: 1px solid #eee;
    padding: 1rem 0;
  }

  .comment-meta {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #777;
    margin-bottom: 0.4rem;
  }

  .comment-author {
    font-weight: bold;
    color: #333;
  }

  .comment-timestamp {
    font-size: 12px;
    color: #aaa;
  }

  .comment-body {
    font-size: 15px;
    line-height: 1.5;
    color: #222;
    padding-left: 0.2rem;
    word-break: break-word;
  }
</style>
