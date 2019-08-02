import {CREATE_COLUMN, GET_COLUMNS, UPDATE_COLUMN_TASK, REARRANGE_COLUMN_TASKS, DELETE_COLUMN, UPDATE_COLUMN, DELETE_BOARD_COLUMNS} from './types';
import {updateBoardColumns, removeColumnFromBoard} from './board';
import {deleteAllColumnTasks} from './task';
import axios from 'axios';
import {getCookie} from '../../utils/cookies';

export const createColumn = (columnData, board) => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      const results = await axios.post('/columns', columnData, {
        headers: {'Authorization': "bearer " + token},
      });
      dispatch(updateBoardColumns(results.data.column, board));
      dispatch({
        type: CREATE_COLUMN,
        payload: {
          column: results.data.column
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteColumn = (columnId, board) => {
  return async dispatch => {
    const token = getCookie('token');

    await axios.delete(`/columns/delete?columnId=${columnId}`, {
      headers: {'Authorization': "bearer " + token},
    });

    dispatch(removeColumnFromBoard(columnId, board));
    dispatch(deleteAllColumnTasks(columnId));

    dispatch({
      type: DELETE_COLUMN,
      payload: {
        columnId: columnId
      }
    })
  }
}

export const updateColumn = updatedColumn => {
  return async dispatch => {
    const token = getCookie('token');
    const results = await axios.patch('/columns/updateColumn', updatedColumn, {
      headers: {'Authorization': "bearer " + token},
    });

    dispatch({
      type: UPDATE_COLUMN,
      payload: {
        updatedColumn: results.data.column
      },
    });
  }
}

export const deleteBoardColumns = boardId => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      await axios.delete(`/columns/deleteBoardColumns?boardId=${boardId}`, {
        headers: {'Authorization': "bearer " + token},
      });

      dispatch({
        type: DELETE_BOARD_COLUMNS,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getColumns = boardId => {
  return async dispatch => {
    const token = getCookie('token');
    const results = await axios.get(`/columns?boardId=${boardId}`, {
      headers: {'Authorization': "bearer " + token},
    });
    dispatch({
      type: GET_COLUMNS,
      payload: {
        columns: results.data.columns,
      }
    })
  }
}

export const updateColumnTasks = (newTask, column) => {
  return async dispatch => {
    try {
      const token = getCookie('token');
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

export const removeTaskFromColumn = (taskId, column) => {
  return async dispatch => {
    const token = getCookie('token');

    const updatedColumn = {
      ...column,
      taskOrder: column.taskOrder.filter(task => task !== taskId),
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
  }
}

export const rearrangeColumnTasks = (column, taskOrder) => {
  return async dispatch => {
    try {
      const token = getCookie('token');
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