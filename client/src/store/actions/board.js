import {CREATE_BOARD, GET_BOARDS, GET_BOARD, DELETE_BOARD, REARRANGE_BOARD_COLUMNS} from './types';
import axios from 'axios';

export const createBoard =  boardData => {
  return async dispatch => {
    try {
      await axios.post('/boards', boardData);
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

export const rearrangeBoardColumns = (newColumn, board) => {
  return async dispatch => {
    try {
      const updatedBoard = {
        ...board,
        columns: [...board.columns, {id: newColumn._id, name: newColumn.name}],
        columnOrder: [...board.columnOrder, newColumn._id]
      }

      const results = await axios.patch('/boards/columnOrder', updatedBoard);
      dispatch({
        type: REARRANGE_BOARD_COLUMNS,
        payload: {
          currentBoard: results.data
        }
      })

    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteBoard = boardId => {
  return dispatch => {
    dispatch({
      type: DELETE_BOARD
    })
  }
}