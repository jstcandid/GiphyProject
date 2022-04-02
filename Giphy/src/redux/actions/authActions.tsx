import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';

import { ACTIONS } from '../constants';

interface IRegisterData {
  email: string;
  password: string;
  age: string;
}

interface ILoginData {
  email: string;
  password: string;
}

export const register = (registerData: IRegisterData) => {
  return async (dispatch: Dispatch) => {
    try {
      const oldUsers = JSON.parse(
        typeof localStorage['users'] == 'undefined'
          ? '[]'
          : localStorage['users']
      );

      const check = oldUsers.some((user: IRegisterData) => {
        if (user.email === registerData.email) {
          return true;
        }
        return false;
      });

      if (check === true) {
        throw 'User with such email alredy exists';
      }

      const users = [...oldUsers, registerData];

      localStorage.setItem(`users`, JSON.stringify(users));

      dispatch(registerSuccess(registerData));
      alert('Registered successfull');
    } catch (error: any) {
      alert('User with such email alredy exists');
      dispatch(registerFailure(error));
    }
  };
};

const registerFailure = (error: any) => {
  return {
    type: ACTIONS.REGISTER_FAILURE,
    error: error,
  };
};

const registerSuccess = (profile: IRegisterData) => {
  return {
    type: ACTIONS.REGISTER_SUCCESS,
    ...profile,
  };
};

const loginSuccess = (profile: ILoginData) => {
  return {
    type: ACTIONS.LOGIN_SUCCESS,
    ...profile,
  };
};

export const login = (profile: ILoginData) => {
  return async (dispatch: Dispatch) => {
    try {
      const registeredUsers = JSON.parse(
        typeof localStorage['users'] == 'undefined'
          ? '[]'
          : localStorage['users']
      );

      const check = registeredUsers.some((user: IRegisterData) => {
        if (
          user.email === profile.email &&
          user.password === profile.password
        ) {
          return true;
        }
        return false;
      });

      if (!check) {
        throw 'Check your password and email address or register first';
      }
      localStorage.setItem(`currentUser`, JSON.stringify(profile));
      alert('Logged in');

      dispatch(loginSuccess(profile));
    } catch (error) {
      alert(error);
      dispatch(registerFailure(error));
    }
  };
};

export const signOut = () => {
  return async (dispatch: Dispatch) => {
    try {
      const clearProfile = {
        email: '',
        password: '',
      };
      localStorage.removeItem('currentUser');

      dispatch(signOutSuccess(clearProfile));
    } catch (error) {
      alert(error);
      dispatch(registerFailure(error));
    }
  };
};

const signOutSuccess = (profile: ILoginData) => {
  return {
    type: ACTIONS.SIGN_OUT,
    ...profile,
  };
};

// export const init = () => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const access = await localStorage.getItem('access');

//       if (access) {
//         const profile = await getProfile();

//         if (profile) {
//           dispatch(loginSuccess(profile));
//         }
//       }
//     } catch (error) {}
//   };
// };
