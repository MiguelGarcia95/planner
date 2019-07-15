import {CREATE_BOARD} from '../actions/types';

const initialState = {
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default board;