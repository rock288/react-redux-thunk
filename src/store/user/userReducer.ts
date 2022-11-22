/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '../../types/user';
import { SET_USER, USER_LOGOUT, Actions } from './action';
import axios from 'axios';
import { removeItem } from '../../utils/indexDB';

function userReducer(
  state: null | User = null,
  action: { type: keyof Actions; data: string }
) {
  switch (action.type) {
    case SET_USER:
      return action.data;
    case USER_LOGOUT:
      delete axios.defaults.headers.common['Authorization'];
      removeItem('user');
      return null;
    default:
      return state;
  }
}

export const setUser = (user: User) => ({
  type: SET_USER,
  data: user,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export default userReducer;
