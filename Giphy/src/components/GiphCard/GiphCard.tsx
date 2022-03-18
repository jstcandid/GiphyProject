import styles from './GiphCard.module.css';

export interface IPost {
  type: string;
  id: string;
  url: string;
  username: string;
  title: string;
  size: number;
  height: number;
}

export function GiphCard({ size, type, id, url, username, title }: IPost) {
  return (
    <>
      <div
        style={{
          gridRowEnd: `span ${size}`,
        }}
        className={`${styles.card}`}
      >
        <img src={url} alt={title} />
        <div className={`${styles.text}`}>
          <p className={`${styles.title}`}>{title}</p>
          <p className={`${styles.username}`}>{username}</p>
        </div>
      </div>
    </>
  );
}
