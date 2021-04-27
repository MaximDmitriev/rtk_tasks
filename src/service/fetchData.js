import { BASE_URL } from '../config';

export function userLogin(body) {
  return fetch(BASE_URL + 'auth/login', {
    method: 'POST',
    headers: {
      'accept': 'text/plain',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
