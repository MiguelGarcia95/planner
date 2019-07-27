export const setCookie = (name, value, expiresIn) => {
  let currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + (expiresIn*1000*60*60*24));
  let expires = `expires=${currentDate.toGMTString()}`;
  window.document.cookie = `${name}=${value}; ${expires}`;
}

export const getCookie = cookieName => {
  let name = `${cookieName}=`;
  let cookieArray = window.document.cookie.split(';');
  let value = '';
  cookieArray.forEach(cookie => {
    if (cookie.indexOf(name) === 0) {
      value = cookie.substring(name.length, cookie.length);
    }
  });

  return value;
}

export const deleteCookie = cookieName => {
  let currentDate = new Date();
  currentDate.setTime(currentDate.getTime() - (1000*60*60*24));
  let expires = `expires=${currentDate.toGMTString()}`;
  window.document.cookie = `${cookieName}=; ${expires}`;
}

