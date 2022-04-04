import { Dispatch } from 'redux';
import { IPost } from '../reducers/postsReducer';
import { IState } from '../store';

const key = 'LCQTJ3sO5PH4lYcdvY06o7KW5iIoWRfO';

const LIMIT = 50;
export function fetchPosts() {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const offset = getState().postsReducer.offset;

    if (offset === 0) {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${LIMIT}&offset=${offset}`
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

      dispatch({ type: 'FETCH_POSTS', posts: result, offset: offset + LIMIT });
    }
  };
}

export function fetchMorePosts() {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const offset = getState().postsReducer.offset;

    const posts = getState().postsReducer.posts;

    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=${LIMIT}&offset=${
        offset + LIMIT
      }`
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

    dispatch({
      type: 'FETCH_POSTS',
      posts: [...posts, ...result],
      offset: offset + LIMIT,
    });
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

export function fetchPost(id: string, isSaved: boolean) {
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
      showSave: isSaved,
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
    const resPost = {
      added: false,
      height: postToAdd.height,
      id: postToAdd.id,
      showSave: !postToAdd.showSave,
      size: postToAdd.size,
      title: postToAdd.title,
      type: postToAdd.type,
      url: postToAdd.url,
      username: postToAdd.username,
    };

    localStorage.setItem(email, JSON.stringify([...posts, resPost]));
    dispatch({ type: 'SAVE_POST', savedPosts: [...posts, resPost] });
  };
}

export function removeGif(postToRemove: IPost) {
  return (dispatch: Dispatch) => {
    const email: string = JSON.parse(
      typeof localStorage['currentUser'] == 'undefined'
        ? '{}'
        : localStorage['currentUser']
    ).email;
    const posts = JSON.parse(
      typeof localStorage[email] == 'undefined' ? '[]' : localStorage[email]
    );

    const newPosts = posts.filter((item: IPost) => item.id !== postToRemove.id);

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
    const myposts = JSON.parse(
      typeof localStorage[email + 'added'] == 'undefined'
        ? '[]'
        : localStorage[email + 'added']
    );

    dispatch({ type: 'UPDATE_SAVE', savedPosts: posts, myPosts: myposts });
  };
}

export function addPost(postToAdd: IPost) {
  return (dispatch: Dispatch) => {
    const email: string = JSON.parse(
      typeof localStorage['currentUser'] == 'undefined'
        ? '{}'
        : localStorage['currentUser']
    ).email;
    const posts = JSON.parse(
      typeof localStorage[email + 'added'] == 'undefined'
        ? '[]'
        : localStorage[email + 'added']
    );
    localStorage.setItem(
      email + 'added',
      JSON.stringify([...posts, postToAdd])
    );
    dispatch({ type: 'ADD_POST', myPosts: [...posts, postToAdd] });
  };
}

export function removeAdded(postToRemove: IPost) {
  return (dispatch: Dispatch) => {
    const email: string = JSON.parse(
      typeof localStorage['currentUser'] == 'undefined'
        ? '{}'
        : localStorage['currentUser']
    ).email;

    const posts = JSON.parse(
      typeof localStorage[email + 'added'] == 'undefined'
        ? '[]'
        : localStorage[email + 'added']
    );

    const newPosts = posts.filter((item: IPost) => item.id !== postToRemove.id);

    localStorage.setItem(email + 'added', JSON.stringify(newPosts));

    dispatch({ type: 'REMOVE_ADDED', myPosts: newPosts });
  };
}
