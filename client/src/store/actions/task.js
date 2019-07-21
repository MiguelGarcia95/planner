import {CREATE_TASK, DELETE_ALL_COLUMN_TASKS, DELETE_TASK, REARRANGE_TASKS, GET_TASKS} from './types';
import axios from 'axios';
import {updateColumnTasks} from './column';

export const createTask = (taskData, column) => {
  return async dispatch => {
    try {
      console.log(column)
      // Add Task To Database
      const results = await axios.post('/tasks', taskData);
      // Add Task to column order
      dispatch(updateColumnTasks(results.data, column));

      dispatch({
        type: CREATE_TASK
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

export const getTasks = columnId => {
  return dispatch => {
  }
}

export const rearrangeTasks = tasks => {
  return dispatch => {
    
  }
}