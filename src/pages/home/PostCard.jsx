import styles from "./PostCard.module.css";

export default function PostCard({ title, content, author, date }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <div className={styles.meta}>
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
