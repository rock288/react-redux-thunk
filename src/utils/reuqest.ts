import { BASE_URL } from '../config';
import axios, { AxiosError, AxiosResponse } from 'axios';
import indexDB, { getToken, getRefreshToken, getExpiresToken } from './indexDB';

const service = axios.create({
  baseURL: decodeURIComponent(BASE_URL || 'http://localhost:9000'), // url = base url + request url
});

// Request interceptors
service.interceptors.request.use(
  async (config: any) => {
    try {
      const token = getToken();
      if (token) {
        const nowInSecs = Date.now();
        const expires = getExpiresToken();
        const timeExpire = new Date(expires).getTime();
        if (timeExpire < nowInSecs) {
          // const refreshToken = getRefreshToken();
          // const tokens = (await refreshTokens({ refreshToken })) as any;
          // indexDB.set('tokens', tokens);
          // token = tokens.access.token;
        }
        config.headers['Content-type'] = 'application/json';
        config.headers.Authorization = `Bearer ${token}`;
      }
      // eslint-disable-next-line no-empty
    } catch (_) {}

    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (!error?.response) {
      return;
    }

    // console.log({ error: error.response.data.message });
  }
);

export default service;
