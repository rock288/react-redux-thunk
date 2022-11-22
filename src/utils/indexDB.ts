import { User } from '../types/user';

// use local Storage
const setItem = (key: string, value: User) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key: string) => {
  const results = localStorage.getItem(key);

  if (!results) {
    return null;
  }

  return JSON.parse(results) as User;
};

const removeItem = (key: string) => {
  return localStorage.removeItem(key);
};

const getToken = () => {
  const user = getItem('user');

  if (!user) {
    return undefined;
  }

  return user?.token;
};

export { setItem, getItem, removeItem, getToken };
