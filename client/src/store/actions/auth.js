import {SIGNIN, SIGNUP, LOGOUT, GET_USER} from './types';
import axios from 'axios';

export const logout = () => {
  // remove token cookie
}

export const signin = userData => {
  return async dispatch => {
    const results = await axios.post('/auth/login', userData);
    document.cookie = `token=${results.data.token}`;
    dispatch({
      type: SIGNIN,
      payload: {
        user: results.data.user
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
        user: results.data.user
      }
    });

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