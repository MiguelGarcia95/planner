import {CREATE_TASK, DELETE_ALL_COLUMN_TASKS, DELETE_TASK, GET_TASKS, UPDATE_TASK} from './types';
import axios from 'axios';
import {updateColumnTasks} from './column';
import {getCookie} from '../../utils/cookies';

// Everything uses document.cookies.token
const token = getCookie('token');

export const createTask = (taskData, column) => {
  return async dispatch => {
    try {
      // Add Task To Database
      const results = await axios.post('/tasks', taskData, {
        headers: {'Authorization': "bearer " + token},
      });
      // Add Task to column order
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
    const results = await axios.patch('/tasks/updateTask', updatedTask, {
      headers: {'Authorization': "bearer " + token},
    });
    dispatch({
      type: UPDATE_TASK,
      payload: {
        updatedTask: results.data.task
      },
    })
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
          tasks: results.data.tasks
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
  return async dispatch => {
    try {
      await axios.delete(`/tasks/delete?taskId=${taskId}`, {
        headers: {'Authorization': "bearer " + token},
      });
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

export const rearrangeTasks = tasks => {
  return dispatch => {
    
  }
}