const TOKEN: string = 'auth-token';

const isBrowser = () => typeof window !== 'undefined';


export const setToken = (token: string) => {
  if(isBrowser()) {
    document.cookie = `${TOKEN}=${token}, path=/`;
    localStorage.setItem(TOKEN, token);
  }
}


export const getToken = () => {
  if(isBrowser()) {
    return localStorage.getItem(TOKEN);
  }
  return null;
}

export const isLoggedIn = () => {
  if(isBrowser()) {
    const token = getToken();
    return !!token;
  }
  return false;
}

export const logout = () => {
  if(isBrowser()) {
    document.cookie = `${TOKEN}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    localStorage.removeItem(TOKEN);
  }
}

const AuthState = {
  isLoggedIn,
  getToken,
  setToken,
  logout
}

export default AuthState;