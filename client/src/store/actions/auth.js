import {SIGNIN, SIGNUP, LOGOUT, LOGIN_WITH_TOKEN} from './types';
import axios from 'axios';

import {setCookie, deleteCookie, getCookie} from '../../utils/cookies';

export const logout = () => {
  return dispatch => {
    // document.cookie = 'token=';
    console.log(document.cookie);
    deleteCookie('token');
    dispatch({
      type: LOGOUT,
      payload: {
        token: null
      }
    })
  }
}

export const signin = userData => {
  return async dispatch => {
    const results = await axios.post('/auth/login', userData);
    // document.cookie = `token=${results.data.token}`;
    setCookie('token', results.data.token, 2);
    dispatch({
      type: SIGNIN,
      payload: {
        user: results.data.user,
        token: results.data.token
      }
    });
  }
}

export const signup = userData => {
  return async dispatch => {
    const results = await axios.post('/auth', userData);
    setCookie('token', results.data.token, 2);
    dispatch({
      type: SIGNUP,
      payload: {
        user: results.data.user,
        token: results.data.token
      }
    });
  }
}

export const signinWithToken = () => {
  return async dispatch => {
    // const token = document.cookie.replace('token=', '');
    const token = getCookie('token');
    console.log(token)
    const results = await axios.post('/auth/loginWithToken', null, {
      headers: {'Authorization': "bearer " + token},
    });

    dispatch({
      type: LOGIN_WITH_TOKEN,
      payload: {
        user: results.data.user,
        token: token
      }
    })
  }
}
