import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Login.module.css';

export function Login() {
  return (
    <div className={`${styles.container}`}>
      <svg
        className={`${styles.logo}`}
        width='60px'
        height='60px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15.5475 8.30327C14.6407 7.49361 13.4329 7 12.1089 7C9.28696 7 7 9.23899 7 12C7 14.761 9.28696 17 12.1089 17C15.5781 17 16.86 14.4296 17 12.4167H12.841'
          stroke='red'
          stroke-width='1.5'
        />
        <path
          d='M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z'
          stroke='red'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
      <h1>Welcome to Giphy</h1>
      <Input
        label='label'
        value='Email'
        className={`${styles.input}`}
        onChange={() => {}}
      />
      <Input
        label='label'
        value='Password'
        className={`${styles.input}`}
        onChange={() => {}}
      />
      <Button text='Log In' className={`${styles.login}`} onClick={() => {}} />
      <p>
        Продолжая, вы соглашаетесь с положениями основных документов Giphy.
        Это Условия предоставления услуг и Политика конфиденциальности
      </p>
      <p>------------------------------------</p>
      <a>Create an account</a>
    </div>
  );
}
