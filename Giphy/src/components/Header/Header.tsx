import { createContext, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { searchGifs } from '../../redux/actions/postActions';
import { IState } from '../../redux/store';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { NavBar } from '../NavBar/NavBar';
import styles from './Header.module.css';
import logo from './g.svg';
import { IPost } from '../../redux/reducers/postsReducer';

export const Context = createContext({
  isOpen: false,

  changeIsOpen: () => {},
});

export function Header() {
  const [isOpen, setOpen] = useState(false);

  const changeIsOpen = () => {
    setOpen((isOpen) => !isOpen);
  };

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoggedIn, email } = useSelector(
    (state: IState) => state.authReducer
  );
  const { savedPosts } = useSelector((state: IState) => state.postsReducer);

  const onChange = useCallback(
    (event) => {
      if (window.location.pathname === '/') {
        setSearch(event.target.value);
        dispatch(searchGifs(search));
      }
    },
    [search]
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        dispatch(searchGifs(search));
        setSearch('');
      }
    },
    [search]
  );

  return (
    <Context.Provider
      value={{
        isOpen: isOpen,
        changeIsOpen,
      }}
    >
      <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
          <img
            onClick={() => {
              history.push('/');
              history.go(0);
            }}
            className={`${styles.logo}`}
            src={logo}
            alt='Giphy logo'
          />
          {isLoggedIn ? (
            <div className={`${styles.input}`}>
              <Input
                value={search}
                className={styles.input_item}
                label='label'
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder='Search...'
              />
            </div>
          ) : (
            <div className={`${styles.input}`}></div>
          )}

          {isLoggedIn ? (
            <div className={`${styles.buttons}`}>
              <Button
                className={styles.button_person}
                text={email.charAt(0).toUpperCase()}
                onClick={() => {}}
              />

              <Button
                className={styles.button}
                text='˅'
                onClick={() => setOpen(!isOpen)}
              />
            </div>
          ) : (
            <div className={`${styles.buttons}`}>
              <NavLink to={'/login'}>
                <Button
                  className={styles.button_login}
                  text='Log in'
                  onClick={() => {}}
                />
              </NavLink>
              <NavLink to={'/registration'}>
                <Button
                  className={styles.button_signup}
                  text='Sign Up'
                  onClick={() => {}}
                />
              </NavLink>
            </div>
          )}

          {isOpen ? (
            <div className={styles.back}>
              <NavBar />
            </div>
          ) : null}
        </div>
      </div>
    </Context.Provider>
  );
}
