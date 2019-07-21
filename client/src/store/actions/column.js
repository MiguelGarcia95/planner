// import {CREATE_COLUMN, DELETE_COLUMN, DELETE_ALL_BOARD_COLUMNS, GET_COLUMNS, REARRANGE_COLUMNS, GET_COLUMNS_ORDER} from './types';
import {CREATE_COLUMN, GET_COLUMNS} from './types';
import {updateBoardColumns} from './board';

import axios from 'axios';

export const createColumn = (columnData, board) => {
  return async dispatch => {
    try {
      const results = await axios.post('/columns', columnData);
      dispatch(updateBoardColumns(results.data, board));
      dispatch({
        type: CREATE_COLUMN,
        payload: {
          column: results.data
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteColumn = columnId => {
  return dispatch => {
  }
}

export const deleteAllBoardColumns = boardId => {
  return dispatch => {

  }
}

export const getColumns = boardId => {
  return async dispatch => {
    const results = await axios.get(`/columns?boardId=${boardId}`);
    dispatch({
      type: GET_COLUMNS,
      payload: {
        columns: results.data,
      }
    })
  }
}

export const updateColumnTasks = (newTask, column) => {
  return async dispatch => {
    const updatedColumn = {
      ...column,
      taskOrder: [...column.taskOrder, newTask._id],
      // columns: [...board.columns, {id: newColumn._id, name: newColumn.name}],
    }
  }
}

export const getColumnsOrder = boardId => {
  return dispatch => {

  }
}

export const rearrangeColumns = (columns) => {
  return dispatch => {
  }
}