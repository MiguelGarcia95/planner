import {SIGNIN, SIGNUP, LOGOUT, GET_USER, GET_TOKEN} from './types';
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

export const getToken = () => {
  return dispatch => {
    const token = document.cookie.replace('token=', '');

    dispatch({
      type: GET_TOKEN,
      payload: {
        token: token
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