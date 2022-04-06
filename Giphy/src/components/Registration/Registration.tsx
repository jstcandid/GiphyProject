import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../redux/actions/authActions';
import { IState } from '../../redux/store';
import { validationService } from '../../services/validation';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Registration.module.css';
import logo from './g.svg';

export function Registration() {
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    age: '',
    email: '',
    password: '',
  });

  const history = useHistory();

  const { isLoggedIn, error } = useSelector(
    (state: IState) => state.authReducer
  );

  const isEmpty = () => {
    return Object.values(errors).every((val) => {
      if (val === '') {
        return true;
      }
      return false;
    });
  };

  const dispatch = useDispatch();

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
      const error = validationService.validatePassword(event.target.value);
      setErrors((errors) => ({ ...errors, password: error }));
    },
    [password]
  );

  const onChangeAge = useCallback(
    (event) => {
      setAge(event.target.value);
      const error = validationService.validateAge(event.target.value);
      setErrors((errors) => ({ ...errors, age: error }));
    },
    [age]
  );

  const registerUser = () => {
    dispatch(register({ email: email, password: password, age: age }));
    const isRegistered = localStorage.getItem('registered');
    if (isRegistered === 'true') {
      history.push('/registration/success');
      localStorage.removeItem('registered');
    }
  };

  return (
    <div className={`${styles.container}`}>
      <img
        onClick={() => history.push('/')}
        className={`${styles.logo}`}
        src={logo}
        alt='Giphy logo'
      />
      <h1>Welcome to Giphy</h1>
      <p className={`${styles.ideas}`}>Find new ideas for inspiration</p>
      <Input
        label='label'
        value={email}
        placeholder='Email'
        styles={errors.email ? { margin: '40px 0 0 0' } : { margin: '40px 0' }}
        className={`${styles.input}`}
        onChange={onChangeEmail}
        error={errors.email}
      />

      <Input
        label='label'
        placeholder='Create password'
        value={password}
        className={`${styles.input}`}
        onChange={onChangePassword}
        error={errors.password}
        styles={errors.password ? { margin: '0' } : { margin: '0 0 40px' }}
        type='password'
      />
      <Input
        label='label'
        value={age}
        placeholder='Age'
        className={`${styles.input}`}
        onChange={onChangeAge}
        error={errors.age}
        styles={errors.age ? { margin: '0' } : { margin: '0 0 40px' }}
      />
      {error ? (
        <p className={`${styles.error}`}>{error}</p>
      ) : (
        <p className={`${styles.error}`}></p>
      )}
      <Button
        text='Sign Up'
        className={`${styles.login}`}
        onClick={isEmpty() ? registerUser : () => {}}
      />

      <p className={`${styles.additional}`}>
        Продолжая, вы соглашаетесь с положениями основных документов Giphy. Это
        Условия предоставления услуг и Политика конфиденциальности
      </p>
      <p className={`${styles.additional}`}>
        ------------------------------------
      </p>
      <a className={`${styles.additional}`}>
        Already have an account? Register
      </a>
    </div>
  );
}
