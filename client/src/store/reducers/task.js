import {CREATE_TASK, GET_TASKS, UPDATE_TASK, DELETE_TASK, DELETE_ALL_COLUMN_TASKS} from '../actions/types';

const initialState = {
  tasks: [],
  toggled: false,
};

const replaceTask = (tasks, updatedTask) => {
  const index = tasks.findIndex(task => task._id === updatedTask._id);
  let updatedTasks = tasks;
  updatedTasks[index] = updatedTask;
  return updatedTasks;
}

const task = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      }
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks,
      }
    case UPDATE_TASK:
      return {
        ...state,
        tasks: replaceTask(state.tasks, action.payload.updatedTask),
        toggled: !state.toggled,
      }
    case DELETE_ALL_COLUMN_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.columnId !== action.payload.taskId)
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload.taskId),
        // toggled: !state.toggled,
      }
    default:
      return state;
  }
}

export default task;