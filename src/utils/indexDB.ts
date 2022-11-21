// use local Storage

const set = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = (key: string) => {
  const results = localStorage.getItem(key);

  if (!results) {
    return null;
  }

  return JSON.parse(results);
};

const removeItem = (key: string) => {
  return localStorage.removeItem(key);
};

export const getToken = () => {
  const tokens = get('tokens');

  if (!tokens) {
    return undefined;
  }

  return tokens.access.token;
};

export const getRefreshToken = () => {
  const tokens = get('tokens');

  if (!tokens) {
    return undefined;
  }

  return tokens.refresh.token;
};

export const getExpiresToken = () => {
  const tokens = get('tokens');

  if (!tokens) {
    return undefined;
  }

  return tokens.access.expires;
};

export default { set, get, removeItem };
