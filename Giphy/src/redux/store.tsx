import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { IPostsState, postsReducer } from './reducers/postsReducer';

export interface IState {
  postsReducer: IPostsState;
}

export const store = createStore(
  combineReducers({ postsReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
