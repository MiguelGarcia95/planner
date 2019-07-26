import {CREATE_BOARD, GET_BOARDS, GET_BOARD, DELETE_BOARD, REARRANGE_BOARD_COLUMNS, UPDATE_BOARD_COLUMNS} from './types';
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
      const token = document.cookie.replace('token=', '');
      console.log(token)
      const results = await axios.get(`/boards?userId=${userId}`, {
        headers: {'Authorization': "bearer " + token},
      });
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
export const rearrangeBoardColumns = (board, columnOrder) => {
  return async dispatch => {
    try {
      const updatedBoard = {
        ...board,
        columnOrder: columnOrder
      };

      await axios.patch('/boards/rearrangeBoardColumns', updatedBoard);

      dispatch({
        type: REARRANGE_BOARD_COLUMNS,
        payload: {
          currentBoard: updatedBoard
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const updateBoardColumns = (newColumn, board) => {
  return async dispatch => {
    try {
      const updatedBoard = {
        ...board,
        columnOrder: [...board.columnOrder, newColumn._id]
      }

      await axios.patch('/boards/updateBoardColumns', updatedBoard);

      dispatch({
        type: UPDATE_BOARD_COLUMNS,
        payload: {
          currentBoard: updatedBoard
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