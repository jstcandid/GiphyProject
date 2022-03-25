import { ACTIONS } from '../constants';

export interface IPost {
  type: string;
  id: string;
  url: string;
  username: string;
  title: string;
  size: number;
  height: number;
  showSave: boolean;
}
export interface IPostsState {
  posts: IPost[];
  post: IPost;
  savedPosts: IPost[];
}

const defaultState: IPostsState = {
  posts: [],
  savedPosts: JSON.parse(
    typeof localStorage['savedPosts'] == 'undefined'
      ? []
      : localStorage['savedPosts']
  ),
  post: {
    type: '',
    id: '',
    url: '',
    username: '',
    title: '',
    size: 0,
    height: 0,
    showSave: true,
  },
};

export function postsReducer(state = defaultState, action: any) {
  if (action.type === ACTIONS.FETCH_POSTS) {
    return { ...state, posts: action.posts };
  } else if (action.type === ACTIONS.SEARCH_GIFS) {
    return { ...state, posts: action.posts };
  } else if (action.type === ACTIONS.GET_POST) {
    return { ...state, post: action.post };
  } else if (action.type === ACTIONS.CLEAN_POST_STATE) {
    return { ...state, post: action.post };
  } else if (action.type === ACTIONS.SAVE_POST) {
    localStorage.setItem(
      'savedPosts',
      JSON.stringify([...state.savedPosts, action.savedPosts])
    );
    const posts = JSON.parse(
      typeof localStorage['savedPosts'] == 'undefined'
        ? null
        : localStorage['savedPosts']
    );
    return { ...state, savedPosts: [...state.savedPosts, action.savedPosts] };
  }
  return state;
}
