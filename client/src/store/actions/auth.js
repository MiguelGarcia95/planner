import {SIGNIN, SIGNUP, LOGOUT, GET_USER, LOGIN_WITH_TOKEN} from './types';
import axios from 'axios';

export const logout = () => {
  return dispatch => {
    // remove token cookie
    // 
    // 
    dispatch({
      type: LOGOUT
    })
  }
}

export const signin = userData => {
  return async dispatch => {
    const results = await axios.post('/auth/login', userData);
    document.cookie = `token=${results.data.token}`;
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
    document.cookie = `token=${results.data.token}`;
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
    const token = document.cookie.replace('token=', '');
    const results = await axios.post('/auth/loginWithToken', null, {
      headers: {'Authorization': "bearer " + token},
    });

    dispatch({
      type: LOGIN_WITH_TOKEN,
      payload: {
        user: results.data.user
      }
    })
  }
}

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: {
        // user: {id: '_5181858s'},
        user: {id: '_5181858'}
      }
    })
  }
}