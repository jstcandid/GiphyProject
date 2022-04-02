import { useHistory } from 'react-router-dom';
import { IPost } from '../../redux/reducers/postsReducer';
import styles from './GiphCard.module.css';

export function GiphCard({ size, type, id, url, username, title }: IPost) {
  const history = useHistory();

  return (
    <>
      <div
        style={{
          gridRowEnd: `span ${size}`,
        }}
        className={`${styles.card}`}
        onClick={() => {
          history.push('/post/' + id);
        }}
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
