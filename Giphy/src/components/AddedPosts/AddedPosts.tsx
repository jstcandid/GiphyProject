import { fail } from 'assert';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions/postActions';
import { IPost } from '../../redux/reducers/postsReducer';
import { IState } from '../../redux/store';
import { GiphCard } from '../GiphCard/GiphCard';
import styles from './AddedPosts.module.css';

export function AddedPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state: IState) => state.postsReducer.myPosts);

  const small_card = 29;
  const medium_card = 36;
  const large_card = 46;

  return (
    <>
      {posts.length === 0 ? (
        <div className={`${styles.noposts}`}>
          <p className={`${styles.noposts_p}`}>
            You don't have any posts yet :(
          </p>
        </div>
      ) : (
        <div className={`${styles.card_list}`}>
          {posts.map((item: IPost) => {
            return (
              <GiphCard
                showSave={false}
                height={item.height}
                size={
                  item.height <= small_card * 10
                    ? small_card
                    : item.height <= medium_card * 10
                    ? medium_card
                    : large_card
                }
                key={item.id}
                type={item.type}
                id={item.id}
                url={item.url}
                username={item.username}
                title={item.title}
                added={true}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
