/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '../../types/user';
import { SET_USER, Actions } from './action';

function userReducer(state = {}, action: { type: keyof Actions; data: string }) {
  switch (action.type) {
    case SET_USER:
      return action.data;
    default:
      return state;
  }
}

export const setUser = (user: User) => ({
  type: SET_USER,
  data: user,
});

export default userReducer;
