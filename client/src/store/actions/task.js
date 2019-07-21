import {CREATE_TASK, DELETE_ALL_COLUMN_TASKS, DELETE_TASK, REARRANGE_TASKS, GET_TASKS} from './types';

export const createTask = (taskData, column) => {
  return dispatch => {
    console.log(taskData);
    console.log(column);
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