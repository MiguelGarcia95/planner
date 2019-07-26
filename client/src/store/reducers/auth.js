import {SIGNIN, SIGNUP, LOGOUT, LOGIN_WITH_TOKEN} from '../actions/types';

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
    case LOGIN_WITH_TOKEN:
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
        ...state,
        user: null
      }
    default:
      return state;
  }
}

export default auth;