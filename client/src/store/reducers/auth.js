import {SIGNIN, SIGNUP, LOGOUT, LOGIN_WITH_TOKEN} from '../actions/types';

const initialState = {
  user: null,
  token: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
    case LOGIN_WITH_TOKEN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
    case SIGNUP:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: action.payload.token
      }
    default:
      return state;
  }
}

export default auth;