import {CREATE_BOARD, GET_BOARDS, GET_BOARD } from './types';

const dbBoards = [
  {
    id: '_935dsfg4',
    title: 'Shit that needs to get done!',
    userId: '342455123414',
    username: 'migg',
    bgColor: 'white'
  }
];

export const createBoard = boardData => {
  return dispatch => {
    dispatch({
      type: CREATE_BOARD,
      payload: {
        board: boardData
      }
    })
  }
}

export const getBoard = boardId => {
  return dispatch => {
    // search DB for board with ID, && make sure user id matches
    const results = dbBoards.filter(board => board.id === boardId);

    dispatch({
      type: GET_BOARD,
      payload: {
        currentBoard: results[0]
      }
    })
  }
}