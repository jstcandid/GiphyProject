import { createContext, useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions/postActions';
import { IState } from '../../redux/store';
import { GiphCard, IPost } from '../GiphCard/GiphCard';
import styles from './GiphyList.module.css';

export function GiphyList() {
  const dispatch = useDispatch();
  const posts = useSelector((state: IState) => state.postsReducer.posts);

  const small_card = 29;

  const medium_card = 36;

  const large_card = 46;

  const key = 'LCQTJ3sO5PH4lYcdvY06o7KW5iIoWRfO';
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className={`${styles.card_list}`}>
      {posts.map((item: IPost) => {
        return (
          <GiphCard
            height={item.height}
            size={
              item.height < small_card * 10
                ? small_card
                : item.height < medium_card * 10
                ? medium_card
                : large_card
            }
            key={item.id}
            type={item.type}
            id={item.id}
            url={item.url}
            username={item.username}
            title={item.title}
          />
        );
      })}
    </div>
  );
}
