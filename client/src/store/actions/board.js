import {CREATE_BOARD, GET_BOARDS, GET_BOARD, DELETE_BOARD, REARRANGE_BOARD_COLUMNS, UPDATE_BOARD_COLUMNS, UPDATE_BOARD} from './types';
import {deleteBoardTasks} from './task';
import {deleteBoardColumns} from './column';
import axios from 'axios';
import {getCookie} from '../../utils/cookies';

export const createBoard =  boardData => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      const results = await axios.post('/boards', boardData, {
        headers: {'Authorization': "bearer " + token},
      });
      dispatch({
        type: CREATE_BOARD,
        payload: {
          board: results.data.board
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeColumnFromBoard = (columnId, board) => {
  return dispatch => {
    const token = getCookie('token');
    const currentBoard = {
      ...board,
      columnOrder: board.columnOrder.filter(column => column !== columnId)
    }

    axios.patch('/boards/updateBoardColumns', currentBoard, {
      headers: {'Authorization': "bearer " + token},
    });
    
    dispatch({
      type: UPDATE_BOARD_COLUMNS,
      payload: {currentBoard}
    })
  }
}

export const updateBoard = updatedBoard => {
  return dispatch => {
    try {
      const token = getCookie('token');
      axios.patch('/boards/updatedBoard', updatedBoard, {
        headers: {'Authorization': "bearer " + token},
      });

      dispatch({
        type: UPDATE_BOARD,
        payload: {updatedBoard}
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getBoards = userId => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      const results = await axios.get(`/boards?userId=${userId}`, {
        headers: {'Authorization': "bearer " + token},
      });
      console.log(results.data.boards);
      dispatch({
        type: GET_BOARDS,
        payload: {
          boards: results.data.boards
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getBoard = (boardId, userId) => {
  return async dispatch => {
    const token = getCookie('token');
    const results = await axios.get(`/boards/board?userId=${userId}&id=${boardId}`, {
      headers: {'Authorization': "bearer " + token},
    });
    dispatch({
      type: GET_BOARD,
      payload: {
        currentBoard: results.data.board
      }
    })
  }
}

export const rearrangeBoardColumns = (board, columnOrder) => {
  return dispatch => {
    try {
      const token = getCookie('token');
      const updatedBoard = {
        ...board,
        columnOrder: columnOrder
      };

      axios.patch('/boards/rearrangeBoardColumns', updatedBoard, {
        headers: {'Authorization': "bearer " + token},
      });

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
  return dispatch => {
    try {
      const token = getCookie('token');
      const updatedBoard = {
        ...board,
        columnOrder: [...board.columnOrder, newColumn._id]
      }

      axios.patch('/boards/updateBoardColumns', updatedBoard, {
        headers: {'Authorization': "bearer " + token},
      });

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
    try {
      const token = getCookie('token');
      axios.delete(`/boards/delete?boardId=${boardId}`, {
        headers: {'Authorization': "bearer " + token},
      });

      dispatch(deleteBoardTasks(boardId));
      dispatch(deleteBoardColumns(boardId));
      dispatch({
        type: DELETE_BOARD,
        payload: {boardId}
      })
    } catch (error) {
      console.log(error);
    }
  }
}