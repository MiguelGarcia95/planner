import {CREATE_TASK, DELETE_ALL_COLUMN_TASKS, DELETE_TASK, GET_TASKS, UPDATE_TASK, DELETE_BOARD_TASKS} from './types';
import axios from 'axios';
import {updateColumnTasks, removeTaskFromColumn} from './column';
import {getCookie} from '../../utils/cookies';

export const createTask = (taskData, column) => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      const results = await axios.post('/tasks', taskData, {
        headers: {'Authorization': "bearer " + token},
      });
      dispatch(updateColumnTasks(results.data.task, column));
      dispatch({
        type: CREATE_TASK,
        payload: {
          task: results.data.task
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateTask = updatedTask => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      await axios.patch('/tasks/updateTask', updatedTask, {
        headers: {'Authorization': "bearer " + token},
      });
      dispatch({
        type: UPDATE_TASK,
        payload: {updatedTask},
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getTasks = boardId => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      const results = await axios.get(`/tasks?boardId=${boardId}`, {
        headers: {'Authorization': "bearer " + token},
      });
      
      dispatch({
        type: GET_TASKS,
        payload: {
          tasks: results.data.tasks
        },
      })
    } catch (error) {
      console.log(error)      
    }
  }
}

export const deleteBoardTasks = boardId => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      await axios.delete(`/tasks/deleteBoardTasks?boardId=${boardId}`, {
        headers: {'Authorization': "bearer " + token},
      });
      dispatch({
        type: DELETE_BOARD_TASKS,
      })
    } catch (error) {
      console.log(error)      
    }
  }
}

export const deleteAllColumnTasks = columnId => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      await axios.delete(`/tasks/deleteColumnTasks?columnId=${columnId}`, {
        headers: {'Authorization': "bearer " + token},
      });
  
      dispatch({
        type: DELETE_ALL_COLUMN_TASKS,
        payload: {
          columnId: columnId
        }
      })
    } catch (error) {
      console.log(error)      
    }
  }
}

export const deleteTask = (taskId, column) => {
  return async dispatch => {
    try {
      const token = getCookie('token');
      await axios.delete(`/tasks/delete?taskId=${taskId}`, {
        headers: {'Authorization': "bearer " + token},
      });
      // change column taskOrder
      dispatch(removeTaskFromColumn(taskId, column));
      dispatch({
        type: DELETE_TASK,
        payload: {
          taskId: taskId
        }
      })
    } catch (error) {
      console.log(error)      
    }
  }
}