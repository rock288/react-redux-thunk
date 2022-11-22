import { combineReducers } from 'redux';
import user from './user/userReducer';

export default combineReducers({
  user: user,
});
