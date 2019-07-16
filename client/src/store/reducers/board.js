import {CREATE_BOARD} from '../actions/types';

const initialState = {
  boards: [],
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload.board]
      }
    default:
      return state;
  }
}

export default board;