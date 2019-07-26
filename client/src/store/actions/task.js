import {CREATE_TASK, DELETE_ALL_COLUMN_TASKS, DELETE_TASK, REARRANGE_TASKS, GET_TASKS} from './types';
import axios from 'axios';
import {updateColumnTasks} from './column';

// Everything uses document.cookies.token
const token = document.cookie.replace('token=', '');

export const createTask = (taskData, column) => {
  return async dispatch => {
    try {
      // Add Task To Database
      const results = await axios.post('/tasks', taskData, {
        headers: {'Authorization': "bearer " + token},
      });
      // Add Task to column order
      dispatch(updateColumnTasks(results.data, column));

      dispatch({
        type: CREATE_TASK,
        payload: {
          task: results.data
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getTasks = boardId => {
  return async dispatch => {
    try {
      const results = await axios.get(`/tasks?boardId=${boardId}`, {
        headers: {'Authorization': "bearer " + token},
      });
      
      dispatch({
        type: GET_TASKS,
        payload: {
          tasks: results.data
        },
      })
    } catch (error) {
      console.log(error)      
    }
  }
}

export const deleteAllColumnTasks = columnId => {
  return dispatch => {
  }
}

export const deleteTask = taskId => {
  return dispatch => {
  }
}

export const rearrangeTasks = tasks => {
  return dispatch => {
    
  }
}