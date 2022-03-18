import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { FullPost } from '../components/FullPost/FullPost';
import { GiphyList } from '../components/GiphyList/GiphyList';
import { Header } from '../components/Header/Header';
import { Login } from '../components/Login/Login';
import { Registration } from '../components/Registration/Registration';
import { IState } from '../redux/store';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={GiphyList} exact></Route>
        <Route path='/post/:postId' component={FullPost} exact></Route>
        <Route path='/login' component={Login} exact></Route>
        <Route path='/registration' component={Registration} exact></Route>
      </Switch>
    </BrowserRouter>
  );
};
