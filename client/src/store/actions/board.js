import {CREATE_BOARD, GET_BOARDS, GET_BOARD, DELETE_BOARD } from './types';
import axios from 'axios';

const dbBoards = [
  {
    id: '_935dsfg4',
    title: 'Shit that needs to get done!',
    userId: '342455123414',
    username: 'migg',
    bgColor: 'white'
  }
];

export const createBoard =  boardData => {
  return async dispatch => {
    try {
      console.log(boardData)
      const results = await axios.post('/boards', {boardData});
      console.log(results);
      dispatch({
        type: CREATE_BOARD,
        payload: {
          board: boardData
        }
      })
    } catch (error) {
      console.log(error)
    }
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

export const getBoards = userId => {
  return dispatch => {

  }
}

export const deleteBoard = boardId => {
  return dispatch => {

  }
}