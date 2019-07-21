import {CREATE_BOARD, GET_BOARDS, GET_BOARD, REARRANGE_BOARD_COLUMNS, UPDATE_BOARD_COLUMNS} from '../actions/types';

const initialState = {
  currentBoard: null,
  boards: [],
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state
      }
    case UPDATE_BOARD_COLUMNS:
      return {
        ...state,
        currentBoard: action.payload.currentBoard
      }
    case REARRANGE_BOARD_COLUMNS:
      return {
        ...state,
        currentBoard: action.payload.currentBoard
      }
    case GET_BOARDS:
      return {
        ...state,
        boards: action.payload.boards
      }
    case GET_BOARD:
      return {
        ...state,
        currentBoard: action.payload.currentBoard
      }
    default:
      return state;
  }
}

export default board;