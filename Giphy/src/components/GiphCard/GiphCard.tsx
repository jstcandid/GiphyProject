import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveGif } from '../../redux/actions/postActions';
import { IPost } from '../../redux/reducers/postsReducer';

import { Button } from '../Button/Button';
import styles from './GiphCard.module.css';

export function GiphCard(item: IPost) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          gridRowEnd: `span ${item.size}`,
        }}
        className={`${styles.card}`}
        onClick={() => history.push('/post/' + item.id)}
      >
        {item.showSave ? (
          <div className={`${styles.hover_background}`} onClick={() => {}}>
            <div className={`${styles.btn_container}`}>
              <Button
                text={'Save'}
                onClick={() => {
                  dispatch(saveGif(item));
                }}
                className={styles.button}
              ></Button>
            </div>
          </div>
        ) : null}
        <img src={item.url} alt={item.title} />
        <div className={`${styles.text}`}>
          <p className={`${styles.title}`}>{item.title}</p>
          <p className={`${styles.username}`}>{item.username}</p>
        </div>
      </div>
    </>
  );
}
