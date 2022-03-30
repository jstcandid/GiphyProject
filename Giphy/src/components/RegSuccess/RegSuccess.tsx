import { Link } from 'react-router-dom';
import styles from './RegSuccess.module.css';

export function RegSuccess() {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.success}`}>
          <p className={`${styles.text}`}>
            Your registration was successfull. You can{' '}
            <Link className={`${styles.link}`} to={'/login'}>
              login
            </Link>{' '}
            now
          </p>
        </div>
      </div>
    </>
  );
}
