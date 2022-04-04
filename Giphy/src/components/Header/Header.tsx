import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { searchGifs } from '../../redux/actions/postActions';
import { IState } from '../../redux/store';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { NavBar } from '../NavBar/NavBar';
import styles from './Header.module.css';
import logo from './g.svg';

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

  const onChange = useCallback(
    (event) => {
      setSearch(event.target.value);
      dispatch(searchGifs(search));
    },
    [search]
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        dispatch(searchGifs(search));
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
        <div className={`${styles.header}`}>
          <img
            onClick={() => history.push('/')}
            className={`${styles.logo}`}
            src={logo}
            alt='Giphy logo'
          />
          <div className={`${styles.input}`}>
            <Input
              value='Search...'
              className={styles.input_item}
              label='label'
              onChange={onChange}
              onKeyDown={onKeyDown}
            />
          </div>
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
