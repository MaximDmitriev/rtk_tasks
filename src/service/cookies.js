export function setCookies(name, value) {
  document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
}

export function deleteCookies(name) {
  document.cookie = encodeURIComponent(name) + '=""; "max-age"=-1 ';
}
