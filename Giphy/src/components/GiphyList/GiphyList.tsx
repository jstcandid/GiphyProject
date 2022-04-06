import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchMorePosts, fetchPosts } from '../../redux/actions/postActions';
import { IPost } from '../../redux/reducers/postsReducer';
import { IState } from '../../redux/store';
import { Button } from '../Button/Button';
import { GiphCard } from '../GiphCard/GiphCard';
import styles from './GiphyList.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '../Loader/Loader';

export function GiphyList() {
  const dispatch = useDispatch();
  const { posts, savedPosts } = useSelector(
    (state: IState) => state.postsReducer
  );

  const small_card = 32;
  const medium_card = 39;
  const large_card = 49;

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const loadMore = useCallback(() => {
    dispatch(fetchMorePosts());
  }, []);

  const checkIfSaved = (post: IPost) => {
    const ids = savedPosts.map((item: IPost) => item.id);
    if (ids.includes(post.id)) {
      return false;
    }
    return true;
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMore}
        hasMore={true}
        loader={<Loader />}
      >
        <div className={`${styles.card_list}`}>
          {posts.map((item: IPost) => {
            const show = checkIfSaved(item);
            return (
              <GiphCard
                showSave={show}
                height={item.height}
                size={
                  item.height < small_card * 10
                    ? small_card
                    : item.height < medium_card * 10
                    ? medium_card
                    : large_card
                }
                key={item.id + Math.random()}
                type={item.type}
                id={item.id}
                url={item.url}
                username={item.username}
                title={item.title}
                added={false}
              />
            );
          })}
        </div>
      </InfiniteScroll>
      <NavLink to={'/addpost'}>
        <div className={`${styles.button}`}>
          <Button className={styles.button_plus} text='+' onClick={() => {}} />
        </div>
      </NavLink>
    </>
  );
}
