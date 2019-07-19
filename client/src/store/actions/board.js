import {CREATE_BOARD, GET_BOARDS, GET_BOARD, DELETE_BOARD } from './types';
import axios from 'axios';

export const createBoard =  boardData => {
  return async dispatch => {
    try {
      await fetch('/boards', {
        method: 'POST',
        body: JSON.stringify(boardData),
        headers: {'Content-Type': 'application/json'}
      })
      // await axios.post('/boards', boardData);
      dispatch({
        type: CREATE_BOARD
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getBoards = userId => {
  return async dispatch => {
    try {
      const results = await axios.get(`/boards?userId=${userId}`);
      dispatch({
        type: GET_BOARDS,
        payload: {
          boards: results.data
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getBoard = (boardId, userId) => {
  return async dispatch => {
    // search DB for board with ID, && make sure user id matches
    const results = await axios.get(`/boards/board?userId=${userId}&id=${boardId}`);
    dispatch({
      type: GET_BOARD,
      payload: {
        currentBoard: results[0]
      }
    })
  }
}

export const deleteBoard = boardId => {
  return dispatch => {

  }
}