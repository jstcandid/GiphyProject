const _emailLanguageRegExp = /^[A-z._@\s\-\d]+$/;
const _emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const _passwordLanguageRegExp = /^[A-z\d]+$/;
const _passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{0,}$/;

export const REQUIRED_FIELD = 'Fill required fields';
const WRONG_MIN_LENGTH = (min: number) =>
  `You cant enter least then ${min} characters`;
const WRONG_MAX_LENGTH = (max: number) =>
  `You cant enter more then ${max} characters`;
const WRONG_AGE = 'Age must contain only digits';
const ENTER_EMAIL = 'Enter email';
const WRONG_EMAIL_LANGUAGE = 'Email must include only latin characters';
const WRONG_EMAIL = 'Email should include special character @ and domen';
const SMALL_AGE = 'You must be over 12';
const OLD_AGE = 'You cant be over 130';
const ENTER_PASSWORD = 'Enter password';

const WRONG_PASSWORD_LANGUAGE =
  'Password must include only latin letters and numbers';
const WRONG_PASSWORD_FORMAT =
  'Password should include at least 1 digit, 1 uppercase letter and 1 lowercase letter';
const WRONG_PASSWORD_LENGTH =
  'Password should include at least 8 characters and not more then 30 characters';

const NOT_ERROR = '';

class ValidationService {
  public validateRequired(value: string): string {
    if (!value) {
      return REQUIRED_FIELD;
    }

    return NOT_ERROR;
  }

  public validateLength(value: string, max?: number, min?: number): string {
    if (!value) {
      return REQUIRED_FIELD;
    }

    if (max !== undefined) {
      return value.length > max ? WRONG_MAX_LENGTH(max) : NOT_ERROR;
    }

    if (min !== undefined) {
      return value.length < min ? WRONG_MIN_LENGTH(min) : NOT_ERROR;
    }

    return NOT_ERROR;
  }

  public validateAge(age: string): string {
    if (!age) {
      return REQUIRED_FIELD;
    }

    if (!/^\d+$/.test(age)) {
      return WRONG_AGE;
    }
    if (parseInt(age) < 12) {
      return SMALL_AGE;
    }
    if (parseInt(age) > 130) {
      return OLD_AGE;
    }

    return NOT_ERROR;
  }

  public validateEmail(email: string): string {
    if (!email) {
      return ENTER_EMAIL;
    }

    if (!_emailLanguageRegExp.test(email)) {
      return WRONG_EMAIL_LANGUAGE;
    }

    if (!_emailRegExp.test(email)) {
      return WRONG_EMAIL;
    }

    return NOT_ERROR;
  }

  public validatePassword(password: string): string {
    if (!password) {
      return ENTER_PASSWORD;
    }

    if (!_passwordLanguageRegExp.test(password)) {
      return WRONG_PASSWORD_LANGUAGE;
    }

    if (!_passwordRegExp.test(password)) {
      return WRONG_PASSWORD_FORMAT;
    }

    if (password.length < 8) {
      return WRONG_PASSWORD_LENGTH;
    }

    if (password.length > 30) {
      return WRONG_PASSWORD_LENGTH;
    }

    return NOT_ERROR;
  }
}

export const validationService = new ValidationService();
