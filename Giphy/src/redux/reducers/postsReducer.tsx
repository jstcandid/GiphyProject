import { ACTIONS } from '../constants';

export interface IPost {
  type: string;
  id: string;
  url: string;
  username: string;
  title: string;
  size: number;
  height: number;
}
export interface IPostsState {
  posts: IPost[];
}

const defaultState: IPostsState = {
  posts: [],
};

export function postsReducer(state = defaultState, action: any) {
  if (action.type === ACTIONS.FETCH_POSTS) {
    console.log(action.posts);
    return { ...state, posts: action.posts };
  }
  return state;
}
