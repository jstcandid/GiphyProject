import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';
import styles from './NavBar.module.css';

interface IState {
  username?: string;
  email?: string;
}

export function NavBar({ username, email }: IState) {
  const [isLogged, setLogin] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <p className={styles.navbar_now}>Now:</p>
        <div className={styles.navbar_profile}>
          <Button
            text='Z'
            onClick={() => {}}
            className={styles.navbar_profile_button}
          />
          <div className={styles.navbar_profile_info}>
            <p className={styles.navbar_username}>someperson</p>
            <p className={styles.text}>Personal:</p>
            <p className={styles.text}>someperson@gmail.com</p>
          </div>
        </div>
        {isLogged ? (
          <Link to={'/login'}>
            <div className={styles.navbar_item}>
              <p className={styles.navbar_text_items}>Sign Out</p>
            </div>
          </Link>
        ) : null}

        <Link to={'/registration'}>
          <div className={styles.navbar_item}>
            <p className={styles.navbar_text_items}>Sign In</p>
          </div>
        </Link>
        <Link to={'/login'}>
          <div className={styles.navbar_item}>
            <p className={styles.navbar_text_items}>Log In</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
