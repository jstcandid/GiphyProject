import { Dispatch } from 'redux';
import { IPost } from '../reducers/postsReducer';

const key = 'LCQTJ3sO5PH4lYcdvY06o7KW5iIoWRfO';

export function fetchPosts() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=100`
    );
    const data = await response.json();
    const result = await data.data.map((post: any) => {
      return {
        height: post.images.original.height,
        type: post.type,
        id: post.id,
        url: post.images.original.url,
        username: post.username,
        title: post.title,
        showSave: true,
      };
    });

    dispatch({ type: 'FETCH_POSTS', posts: result });
  };
}

export function searchGifs(searchWord: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchWord}?limit=50`
    );
    const data = await response.json();
    const result = await data.data.map((post: any) => {
      return {
        height: post.images.original.height,
        type: post.type,
        id: post.id,
        url: post.images.original.url,
        username: post.username,
        title: post.title,
      };
    });

    dispatch({ type: 'SEARCH_GIFS', posts: result });
  };
}

export function fetchPost(id: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${key}`
    );
    const data = await response.json();

    const result = {
      height: data.data.images.original.height,
      type: data.data.type,
      id: data.data.id,
      url: data.data.images.original.url,
      username: data.data.username,
      title: data.data.title,
    };
    dispatch({ type: 'GET_POST', post: result });
  };
}

export function cleanPostState() {
  return async (dispatch: Dispatch) => {
    const post = {
      height: 0,
      type: '',
      id: '',
      url: '',
      username: '',
      title: '',
    };
    dispatch({ type: 'CLEAN_POST_STATE', post: post });
  };
}

export function saveGif(postToAdd: IPost) {
  return (dispatch: Dispatch) => {
    const email: string = JSON.parse(
      typeof localStorage['currentUser'] == 'undefined'
        ? '{}'
        : localStorage['currentUser']
    ).email;
    const posts = JSON.parse(
      typeof localStorage[email] == 'undefined' ? '[]' : localStorage[email]
    );
    localStorage.setItem(email, JSON.stringify([...posts, postToAdd]));

    dispatch({ type: 'SAVE_POST', savedPosts: [...posts, postToAdd] });
  };
}

export function removeGif(postToAdd: IPost) {
  return (dispatch: Dispatch) => {
    const email: string = JSON.parse(
      typeof localStorage['currentUser'] == 'undefined'
        ? '{}'
        : localStorage['currentUser']
    ).email;
    const posts = JSON.parse(
      typeof localStorage[email] == 'undefined' ? '[]' : localStorage[email]
    );

    const newPosts = posts.filter((item: IPost) => item.id !== postToAdd.id);

    localStorage.setItem(email, JSON.stringify(newPosts));

    dispatch({ type: 'REMOVE_POST', savedPosts: newPosts });
  };
}

export function updateState() {
  return async (dispatch: Dispatch) => {
    const email: string = JSON.parse(
      typeof localStorage['currentUser'] == 'undefined'
        ? '{}'
        : localStorage['currentUser']
    ).email;
    const posts = JSON.parse(
      typeof localStorage[email] == 'undefined' ? '[]' : localStorage[email]
    );

    dispatch({ type: 'UPDATE_SAVE', savedPosts: posts });
  };
}
