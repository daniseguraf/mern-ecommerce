import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOGOUT,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
} from '../constants/userConstants';

export const userReducer = (state = null, action) => {
  if (action.type === USER_LOGIN_SUCCESS) {
    return { email: action.payload.email, token: action.payload.token };
  }
  if (action.type === USER_LOGIN_LOGOUT) {
    return action.payload;
  }

  return state;
};

export const userSignInReducer = (state = {}, action) => {
  if (action.type === USER_SIGNIN_REQUEST) {
    return { loading: true };
  }
  if (action.type === USER_SIGNIN_SUCCESS) {
    return { loading: false, userInfo: action.payload };
  }
  if (action.type === USER_SIGNIN_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};
