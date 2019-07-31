import {CREATE_BOARD, GET_BOARDS, GET_BOARD, DELETE_BOARD, REARRANGE_BOARD_COLUMNS, UPDATE_BOARD_COLUMNS} from './types';
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
  return async dispatch => {
    const token = getCookie('token');
    const updatedBoard = {
      ...board,
      columnOrder: board.columnOrder.filter(column => column !== columnId)
    }

    await axios.patch('/board/updateBoardColumns', updatedBoard, {
      headers: {'Authorization': "bearer " + token},
    });

    dispatch({
      type: UPDATE_BOARD_COLUMNS,
      payload: {
        currentBoard: updatedBoard
      }
    })
  }
}

export const getBoards = userId => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      const results = await axios.get(`/boards?userId=${userId}`, {
        headers: {'Authorization': "bearer " + token},
      });
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
        currentBoard: results.data
      }
    })
  }
}
export const rearrangeBoardColumns = (board, columnOrder) => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      const updatedBoard = {
        ...board,
        columnOrder: columnOrder
      };

      await axios.patch('/boards/rearrangeBoardColumns', updatedBoard, {
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
  return async dispatch => {
    try {
      const token = getCookie('token');
      const updatedBoard = {
        ...board,
        columnOrder: [...board.columnOrder, newColumn._id]
        
      }

      await axios.patch('/boards/updateBoardColumns', updatedBoard, {
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
    dispatch({
      type: DELETE_BOARD
    })
  }
}