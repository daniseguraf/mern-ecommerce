import { auth } from './../firebase';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../constants/userConstants';

export const userLogin = () => async (dispatch) => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { email: user.email, token: idTokenResult.token },
      });
    }
  });
};
