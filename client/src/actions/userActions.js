import { auth } from './../firebase';

import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOGOUT,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
} from '../constants/userConstants';

export const userLogin = () => async (dispatch) => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { email: user.email, token: idTokenResult.token },
      });
    }
  });
};

export const userLogout = () => async (dispatch) => {
  const userLogout = await auth.signOut();
  console.log('userLogout', userLogout);

  dispatch({
    type: USER_LOGIN_LOGOUT,
    payload: null,
  });
};

export const userSignIn = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNIN_REQUEST });

    const data = await auth.signInWithEmailAndPassword(email, password);
    const idTokenResult = await data.user.getIdTokenResult();

    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: {
        email: data.user.email,
        token: idTokenResult.token,
      },
    });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error });
  }
};
