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

const email: string = JSON.parse(
  typeof localStorage['currentUser'] == 'undefined'
    ? '{}'
    : localStorage['currentUser']
).email;

const defaultState: IPostsState = {
  posts: [],
  savedPosts: JSON.parse(
    typeof localStorage[email] == 'undefined' ? '[]' : localStorage[email]
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
    return { ...state, savedPosts: action.savedPosts };
  } else if (action.type === ACTIONS.UPDATE_SAVE) {
    return { ...state, savedPosts: action.savedPosts };
  } else if (action.type === ACTIONS.REMOVE_POST) {
    return { ...state, savedPosts: action.savedPosts };
  }
  return state;
}
