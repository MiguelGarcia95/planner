import {CREATE_TASK, GET_TASKS, UPDATE_TASK, DELETE_TASK} from '../actions/types';

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
        toggled: !state.toggled,
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
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload.taskId)
      }
    default:
      return state;
  }
}

export default task;