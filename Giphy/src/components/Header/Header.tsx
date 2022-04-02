import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { searchGifs } from '../../redux/actions/postActions';
import { IState } from '../../redux/store';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Login } from '../Login/Login';
import { NavBar } from '../NavBar/NavBar';
import styles from './Header.module.css';

export function Header() {
  const { isLoggedIn } = useSelector((state: IState) => state.authReducer);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const [isOpen, setOpen] = useState(false);

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
    <div className={`${styles.header}`}>
      <svg
        onClick={() => history.push('/')}
        className={`${styles.logo}`}
        viewBox='0 0 24 24'
        width='70px'
        height='70px'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15.5475 8.30327C14.6407 7.49361 13.4329 7 12.1089 7C9.28696 7 7 9.23899 7 12C7 14.761 9.28696 17 12.1089 17C15.5781 17 16.86 14.4296 17 12.4167H12.841'
          stroke='red'
          strokeWidth='1.5'
        />
        <path
          d='M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z'
          stroke='red'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
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
            text='S'
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

      {isOpen ? <NavBar /> : null}
    </div>
  );
}
