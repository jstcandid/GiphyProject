import { Console } from 'console';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  removeAdded,
  removeGif,
  saveGif,
} from '../../redux/actions/postActions';
import { IPost } from '../../redux/reducers/postsReducer';
import { IState } from '../../redux/store';

import { Button } from '../Button/Button';
import styles from './GiphCard.module.css';

export function GiphCard(item: IPost) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: IState) => state.authReducer);

  return (
    <>
      <div
        style={{
          gridRowEnd: `span ${item.size}`,
        }}
        className={`${styles.card}`}
        onClick={() => {
          history.push('/post/' + item.id);
          history.go(0);
        }}
      >
        {isLoggedIn ? (
          <div>
            {item.showSave ? (
              <div className={`${styles.hover_background}`} onClick={() => {}}>
                <div className={`${styles.btn_container}`}>
                  <Button
                    text={'Save'}
                    onClick={(event) => {
                      event.stopPropagation();

                      dispatch(saveGif(item));
                    }}
                    className={styles.button}
                  />
                </div>
              </div>
            ) : (
              <div className={`${styles.hover_background}`} onClick={() => {}}>
                <div className={`${styles.btn_container}`}>
                  <Button
                    text={'Remove'}
                    onClick={
                      item.added
                        ? (event) => {
                            event.stopPropagation();
                            dispatch(removeAdded(item));
                          }
                        : (event) => {
                            event.stopPropagation();
                            dispatch(removeGif(item));
                          }
                    }
                    className={styles.button_remove}
                  />
                </div>
              </div>
            )}
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
