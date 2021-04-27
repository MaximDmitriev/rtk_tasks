import { Auth } from './constants';

export const requestLogin = body => {
  return {
    type: Auth.REQUEST_USER_LOGIN,
    payload: { body },
  };
};
