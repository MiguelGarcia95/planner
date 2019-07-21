import {CREATE_TASK, GET_TASKS} from '../actions/types';

const initialState = {
  tasks: []
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
      }
    case GET_TASKS:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default task;