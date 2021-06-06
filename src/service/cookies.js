export function setCookies(name, value) {
  document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; max-age=3600';
}

export function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )'+ name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)',
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookies(name) {
  document.cookie = encodeURIComponent(name) + '=""; "max-age"=-1 ';
}
