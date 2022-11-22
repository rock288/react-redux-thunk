/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from '../config';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getToken } from './indexDB';
import jwt_decode from 'jwt-decode';
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
        const decoded: { exp: number } = jwt_decode(token);
        const nowInSecs = Date.now();
        const timeExpire = decoded.exp;
        if (nowInSecs < timeExpire) {
          history.replace('/login');
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
