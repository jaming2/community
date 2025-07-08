import styles from "../Page.module.css";

export default function Qna() {
  return (
    <div className={styles.container}>
      <h2>Q&A</h2>
      <p>궁금한 것을 질문하고 답변하는 공간입니다.</p>
      {/* 여기에 질문 목록, 검색창 등의 컴포넌트가 추가될 수 있습니다. */}
    </div>
  );
}
