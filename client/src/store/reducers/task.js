import {CREATE_TASK, GET_TASKS} from '../actions/types';

const initialState = {
  tasks: [],
  toggled: false,
};

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
    default:
      return state;
  }
}

export default task;