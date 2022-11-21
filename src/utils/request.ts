/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from '../config';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getToken, getExpiresToken } from './indexDB';
import history from './history';

const service = axios.create({
  baseURL: decodeURIComponent(BASE_URL || ''),
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
          history.replace('/login'); // <-- navigate
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
  }
);

export default service;
