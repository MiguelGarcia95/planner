import {CREATE_BOARD, GET_BOARDS, GET_BOARD, REARRANGE_BOARD_COLUMNS, UPDATE_BOARD_COLUMNS, DELETE_BOARD, UPDATE_BOARD} from '../actions/types';

const initialState = {
  currentBoard: null,
  boards: [],
  started: false,
  boardToggle: false
};

const replaceBoard = (boards, newBoard) => {
  const index = boards.findIndex(column => column._id === newBoard._id);
  let sortedBoards = boards;
  sortedBoards[index] = newBoard;
  return sortedBoards;
}

const board = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload.board]
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
        boards: action.payload.boards,
        started: true,
      }
    case GET_BOARD:
      return {
        ...state,
        currentBoard: action.payload.currentBoard
      }
    case UPDATE_BOARD:
      return {
        ...state,
        boards: replaceBoard(state.boards, action.payload.updatedBoard),
        boardToggle: !state.boardToggle
      }
    case DELETE_BOARD:
      return {
        ...state,
        boards: state.boards.filter(board => board._id !== action.payload.boardId),
      }
    default:
      return state;
  }
}

export default board;