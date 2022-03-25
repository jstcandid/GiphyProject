import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../redux/actions/authActions';
import { IState } from '../../redux/store';
import { validationService } from '../../services/validation';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Registration.module.css';

export function Registration() {
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    age: '',
    email: '',
    password: '',
  });
  // const error = useSelector((state: IState) => {
  //   state.authReducer.error;
  // });

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
      <h1>Welcome to Giphy</h1>
      <p className={`${styles.ideas}`}>Find new ideas for inspiration</p>
      <Input
        label='label'
        value='Email'
        properties={
          errors.email ? { margin: '40px 0 0 0' } : { margin: '40px 0' }
        }
        className={`${styles.input}`}
        onChange={onChangeEmail}
        error={errors.email}
      />

      <Input
        label='label'
        value='Create password'
        className={`${styles.input}`}
        onChange={onChangePassword}
        error={errors.password}
        properties={errors.password ? { margin: '0' } : { margin: '0 0 40px' }}
        type='password'
      />
      <Input
        label='label'
        value='Age'
        className={`${styles.input}`}
        onChange={onChangeAge}
        error={errors.age}
        properties={errors.age ? { margin: '0' } : { margin: '0 0 40px' }}
      />
      <Button
        text='Sign Up'
        className={`${styles.login}`}
        onClick={
          isEmpty()
            ? () => {
                dispatch(
                  register({ email: email, password: password, age: age })
                );
              }
            : () => {}
        }
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
