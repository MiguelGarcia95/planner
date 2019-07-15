import {CREATE_TASK} from '../actions/types';

const initialState = {
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default task;