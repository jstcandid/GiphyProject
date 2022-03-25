import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer, IAuthState } from './reducers/authReducer';
import { IPostsState, postsReducer } from './reducers/postsReducer';

export interface IState {
  postsReducer: IPostsState;
  authReducer: IAuthState;
}

export const store = createStore(
  combineReducers({ postsReducer, authReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
