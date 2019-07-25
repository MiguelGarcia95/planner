import {SIGNIN, SIGNUP, LOGOUT, GET_USER} from '../actions/types';

const initialState = {
  user: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.payload.user
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload.user
      }
    case SIGNUP:
      return {
        ...state,
        user: action.payload.user
      }
    case LOGOUT:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default auth;