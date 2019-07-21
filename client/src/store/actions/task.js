import {CREATE_TASK, DELETE_ALL_COLUMN_TASKS, DELETE_TASK, REARRANGE_TASKS, GET_TASKS} from './types';
import axios from 'axios';

export const createTask = (taskData, column) => {
  return async dispatch => {
    try {
      console.log(taskData);
      console.log(column);

      // Add Task To Database
      const results = await axios.post('/tasks', taskData);
      // Add Task to column order
      // dispatch(updateColumnTasks(results.data, board));

      // dispatch({
      //   type: CREATE_TASK,
      //   payload: {
      //     // column: results.data
      //   }
      // })
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