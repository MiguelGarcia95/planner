import {CREATE_BOARD, GET_BOARDS, GET_BOARD} from '../actions/types';

const initialState = {
  currentBoard: null,
  boards: [
    // {
    //   id: '_935dsfg4',
    //   title: 'Shit that needs to get done!',
    //   userId: '342455123414',
    //   username: 'migg',
    //   bgColor: 'white'
    // }
  ],
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload.board]
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