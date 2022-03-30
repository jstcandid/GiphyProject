import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AddPost } from '../components/AddPost/AddPost';
import { FullPost } from '../components/FullPost/FullPost';
import { SavedPosts } from '../components/SavedPosts/SavedPosts';
import { GiphyList } from '../components/GiphyList/GiphyList';
import { Header } from '../components/Header/Header';
import { Login } from '../components/Login/Login';
import { Registration } from '../components/Registration/Registration';
import styles from './RootRouter.module.css';
import { RegSuccess } from '../components/RegSuccess/RegSuccess';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={GiphyList} exact></Route>
        <Route path='/post/:postId' component={FullPost} exact></Route>
        <Route path='/login' component={Login} exact></Route>
        <Route path='/registration' component={Registration} exact></Route>
        <Route path='/addpost' component={AddPost} exact></Route>
        <Route path='/saved' component={SavedPosts} exact></Route>
        <Route
          path='/registration/success'
          component={RegSuccess}
          exact
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};
