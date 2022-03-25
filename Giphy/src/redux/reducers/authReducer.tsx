import { ACTIONS } from '../constants';

export interface IAuthState {
  error: any;
  password: string;
  email: string;
  isLoggedIn: boolean;
}

const defaultState: IAuthState = {
  error: null,
  password: '',
  email: JSON.parse(
    typeof localStorage['currentUser'] == 'undefined'
      ? '""'
      : localStorage['currentUser']
  ).email,
  isLoggedIn: !!JSON.parse(
    typeof localStorage['currentUser'] == 'undefined'
      ? 'false'
      : localStorage['currentUser']
  ),
};

export const authReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.REGISTER_FAILURE) {
    return { ...state, error: action.error };
  }
  if (action.type === ACTIONS.REGISTER_SUCCESS) {
    return {
      ...state,
      error: null,
      age: action.age,
      password: action.password,
      email: action.email,
    };
  }
  if (action.type === ACTIONS.LOGIN_SUCCESS) {
    return {
      ...state,
      error: null,
      age: action.age,
      email: action.email,
      isLoggedIn: true,
    };
  }
  if (action.type === ACTIONS.SIGN_OUT) {
    return {
      ...state,
      error: null,
      age: action.age,
      email: action.email,
      isLoggedIn: false,
    };
  }
  return state;
};
