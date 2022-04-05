import { Link } from 'react-router-dom';
import styles from './RegisterSuccess.module.css';

export function RegisterSuccess() {
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
