import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { isTemplateExpression } from 'typescript';
import {
  cleanPostState,
  fetchPost,
  removeGif,
  saveGif,
} from '../../redux/actions/postActions';
import { IPost } from '../../redux/reducers/postsReducer';

import { IState } from '../../redux/store';
import { Button } from '../Button/Button';

import { GiphyList } from '../GiphyList/GiphyList';
import styles from './FullPost.module.css';

type Params = {
  postId: string;
};

export const FullPost = () => {
  const dispatch = useDispatch();
  const params: Params = useParams();
  const { post, savedPosts } = useSelector(
    (state: IState) => state.postsReducer
  );
  const { isLoggedIn } = useSelector((state: IState) => state.authReducer);

  const checkIfSaved = (id: string) => {
    const ids = savedPosts.map((item: IPost) => item.id);
    if (ids.includes(id)) {
      return false;
    }
    return true;
  };

  const showSave = checkIfSaved(params.postId);

  useEffect(() => {
    dispatch(fetchPost(params.postId, showSave));
    return () => {
      dispatch(cleanPostState());
    };
  }, []);

  return post.title ? (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
          <img className={`${styles.image}`} src={post.url} alt={post.title} />
          <div className={`${styles.content}`}>
            <div>
              {isLoggedIn ? (
                <div>
                  {showSave ? (
                    <div className={`${styles.button_container}`}>
                      <Button
                        className={styles.save}
                        text='Save'
                        onClick={() => {
                          dispatch(saveGif(post));
                        }}
                      />
                    </div>
                  ) : (
                    <div className={`${styles.button_container}`}>
                      <Button
                        className={styles.remove}
                        text='Remove'
                        onClick={() => {
                          dispatch(removeGif(post));
                        }}
                      />
                    </div>
                  )}
                </div>
              ) : null}
              <div className={`${styles.text}`}>
                {post.username ? (
                  <p className={`${styles.username}`}>
                    Loaded by:
                    <span className={`${styles.username_val}`}>
                      {post.username}
                    </span>
                  </p>
                ) : null}

                <p className={`${styles.title}`}>{post.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: '90px',
        }}
      >
        <GiphyList />
      </div>
    </>
  ) : (
    <div></div>
  );
};
