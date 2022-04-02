import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/actions/authActions';
import { updateState } from '../../redux/actions/postActions';
import { authReducer } from '../../redux/reducers/authReducer';
import { IState, store } from '../../redux/store';
import { validationService } from '../../services/validation';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Login.module.css';
import logo from './g.svg';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const { error } = useSelector((state: IState) => state.authReducer);

  const dispatch = useDispatch();
  const history = useHistory();

  const loginUser = () => {
    dispatch(login({ email: email, password: password }));
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      localStorage.removeItem('loggedIn');
      history.push('/');
      dispatch(updateState());
    }
  };

  const onChangeEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
      const error = validationService.validateEmail(event.target.value);
      setErrors((errors) => ({ ...errors, email: error }));
    },
    [email]
  );

  const onChangePassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [password]
  );

  return (
    <div className={`${styles.background}`}>
      <div className={`${styles.container}`}>
        <img
          onClick={() => history.push('/')}
          className={`${styles.logo}`}
          src={logo}
          alt='Giphy logo'
        />
        <h1>Welcome to Giphy</h1>
        <Input
          styles={
            errors.email ? { margin: '40px 0 0 0' } : { margin: '40px 0' }
          }
          label='label'
          value='Email'
          className={`${styles.input}`}
          onChange={onChangeEmail}
          error={errors.email}
        />
        <Input
          label='label'
          value='Password'
          className={`${styles.input}`}
          onChange={onChangePassword}
          type='password'
        />
        {localStorage.getItem('loggedIn') ? (
          <p className={`${styles.error}`}>{error}</p>
        ) : (
          <p className={`${styles.error}`}></p>
        )}
        <Button
          text='Log In'
          className={`${styles.login}`}
          onClick={loginUser}
        />
        <p>
          Продолжая, вы соглашаетесь с положениями основных документов Giphy.
          Это Условия предоставления услуг и Политика конфиденциальности
        </p>
        <p>------------------------------------</p>
        <a
          onClick={() => {
            history.push('/registration');
          }}
        >
          Create an account
        </a>
      </div>
    </div>
  );
}
