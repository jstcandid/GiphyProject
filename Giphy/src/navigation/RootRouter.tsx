import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AddPost } from '../components/AddPost/AddPost';
import { FullPost } from '../components/FullPost/FullPost';
import { SavedPosts } from '../components/SavedPosts/SavedPosts';
import { GiphyList } from '../components/GiphyList/GiphyList';
import { Header } from '../components/Header/Header';
import { Login } from '../components/Login/Login';
import { Registration } from '../components/Registration/Registration';
import { RegisterSuccess } from '../components/RegisterSuccess/RegisterSuccess';
import { AddedPosts } from '../components/AddedPosts/AddedPosts';

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
          component={RegisterSuccess}
          exact
        ></Route>
        <Route path='/added' component={AddedPosts} exact></Route>
      </Switch>
    </BrowserRouter>
  );
};
