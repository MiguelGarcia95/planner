import {SIGNIN, SIGNUP, LOGOUT} from '../actions/types';

const initialState = {

}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state
      }
    case SIGNUP:
      return {
        ...state
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