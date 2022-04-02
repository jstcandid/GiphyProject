import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  cleanPostState,
  fetchPost,
  saveGif,
} from '../../redux/actions/postActions';

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
  const post = useSelector((state: IState) => state.postsReducer.post);

  const getPost = async () => {
    dispatch(fetchPost(params.postId));
  };

  useEffect(() => {
    getPost();
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
              <div className={`${styles.button_container}`}>
                <Button
                  className={styles.save}
                  text='Save'
                  onClick={() => {
                    dispatch(saveGif(post));
                  }}
                />
              </div>

              <p className={`${styles.username}`}>
                Loaded by:{post.username}
                <span className={`${styles.username_val}`}>
                  {post.username}
                </span>
              </p>
            </div>
            <p className={`${styles.title}`}>{post.title}</p>
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
