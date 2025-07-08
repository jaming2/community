import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./Community.module.css";

export default function Community() {
  const posts = useMemo(() => [
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
  ], []);

  const postsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useMemo(() => Math.ceil(posts.length / postsPerPage), [posts.length]);

  const gotoPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return posts.slice(start, end);
  }, [currentPage, posts, postsPerPage]);

  const getPageNumbers = useMemo(() => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.filter(page =>
      Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages
    );
  }, [currentPage, totalPages]);

  return (
    <section className={styles.postList}>
      <h1 className={styles.sectionTitle}>자유게시판</h1>
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
          {getPaginatedPosts.map((post) => (
            <tr key={post.id}>
              <td className={styles.title}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </td>
              <td>{post.author}</td>
              <td>{post.date}</td>
              <td>{post.views}</td>
              <td>{post.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button onClick={() => gotoPage(1)} disabled={currentPage === 1}>&laquo;</button>
        <button onClick={() => gotoPage(currentPage - 1)} disabled={currentPage === 1}>&lsaquo;</button>

        {getPageNumbers.map((page) => (
          <React.Fragment key={page}>
            {((page === 2 && currentPage > 4) || (page === totalPages - 1 && currentPage < totalPages - 3)) && (
              <span>...</span>
            )}
            <button
              className={page === currentPage ? styles.active : undefined}
              onClick={() => gotoPage(page)}
            >
              {page}
            </button>
          </React.Fragment>
        ))}

        <button onClick={() => gotoPage(currentPage + 1)} disabled={currentPage === totalPages}>&rsaquo;</button>
        <button onClick={() => gotoPage(totalPages)} disabled={currentPage === totalPages}>&raquo;</button>
      </div>
    </section>
  );
}
