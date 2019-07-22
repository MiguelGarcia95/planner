import {SIGNIN, SIGNUP, LOGOUT, GET_USER} from './types';

export const logout = () => {
}

export const singin = userData => {
}

export const signup = userData => {
}

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: {
        user: {id: '_5181858'}
      }
    })
  }
}