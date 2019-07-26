// import {CREATE_COLUMN, DELETE_COLUMN, DELETE_ALL_BOARD_COLUMNS, GET_COLUMNS, REARRANGE_COLUMNS, GET_COLUMNS_ORDER} from './types';
import {CREATE_COLUMN, GET_COLUMNS, UPDATE_COLUMN_TASK, REARRANGE_COLUMN_TASKS} from './types';
import {updateBoardColumns} from './board';
import axios from 'axios';

// Everything uses document.cookies.token
const token = document.cookie.replace('token=', '');


export const createColumn = (columnData, board) => {
  return async dispatch => {
    try {
      const results = await axios.post('/columns', columnData, {
        headers: {'Authorization': "bearer " + token},
      });
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
    const results = await axios.get(`/columns?boardId=${boardId}`, {
      headers: {'Authorization': "bearer " + token},
    });
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
    try {
      const updatedColumn = {
        ...column,
        taskOrder: [...column.taskOrder, newTask._id],
      }

      await axios.patch('/columns/updateColumnTasks', updatedColumn, {
        headers: {'Authorization': "bearer " + token},
      });

      dispatch({
        type: UPDATE_COLUMN_TASK,
        payload: {
          updatedColumn: updatedColumn
        }
      })
    } catch (error) {
      console.log(error)
    }

  }
}

export const rearrangeColumnTasks = (column, taskOrder) => {
  return async dispatch => {
    try {
      const rearrangedColumn = {
        ...column,
        taskOrder: taskOrder,
      };

      await axios.patch('/columns/rearrangeColumnTasks', rearrangedColumn, {
        headers: {'Authorization': "bearer " + token},
      })

      dispatch({
        type: REARRANGE_COLUMN_TASKS,
        payload: {
          rearrangedColumn: rearrangedColumn
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}