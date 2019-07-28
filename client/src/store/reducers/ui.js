import {SIGNIN} from '../actions/types';

const initialState = {
}

const ui = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default ui;