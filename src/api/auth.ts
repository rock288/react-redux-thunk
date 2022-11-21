import request from '../utils/request';

export const login = (data: { email: string; password: string }) =>
  request({
    url: '/api/auth/signin',
    method: 'post',
    data,
  });

export const signUp = (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) =>
  request({
    url: '/api/auth/signup',
    method: 'post',
    data,
  });

export const logout = (data: { refreshToken: string }) =>
  request({
    url: '/api/auth/logout',
    method: 'post',
    data,
  });
