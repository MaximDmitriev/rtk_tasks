import { Auth } from './constants';

export const requestLogin = body => {
  return {
    type: Auth.REQUEST_USER_LOGIN,
    payload: { body },
  };
};

export const userLogout = () => {
  return {
    type: Auth.USER_LOGOUT,
  };
};

export const checkToken = () => {
  return {
    type: Auth.CHECK_TOKEN,
  };
};
