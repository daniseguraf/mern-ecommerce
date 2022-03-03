import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../constants/userConstants';

export const userReducer = (state = null, action) => {
  if (action.type === USER_LOGIN_SUCCESS) {
    return { email: action.payload.email, token: action.payload.token };
  }

  return state;
};
