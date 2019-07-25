import {SIGNIN, SIGNUP, LOGOUT, GET_USER} from './types';
import axios from 'axios';

export const logout = () => {
  // remove token cookie
}

export const signin = async userData => {
  // add token from cookie
  // document.cookie
  // await axios.post('/auth/signup', boardData);

}

export const signup = async userData => {
  // add token from cookie
  const results = await axios.post('/auth', userData);
  console.log(results.data);
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