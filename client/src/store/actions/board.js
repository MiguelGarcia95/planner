import {CREATE_BOARD, GET_BOARDS, GET_BOARD, DELETE_BOARD, REARRANGE_BOARD_COLUMNS} from './types';
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
    const results = await axios.get(`/boards/board?userId=${userId}&id=${boardId}`);
    dispatch({
      type: GET_BOARD,
      payload: {
        currentBoard: results.data
      }
    })
  }
}

export const rearrangeBoardColumns = newColumn => {
  return async dispatch => {
    //Fetch board, add new Column id to column order and update
    // console.log(newColumn);
    
    dispatch({
      type: REARRANGE_BOARD_COLUMNS,
      payload: {
        // currentBoard: results.data
      }
    })
  }
}

export const deleteBoard = boardId => {
  return dispatch => {
    dispatch({
      type: DELETE_BOARD
    })
  }
}