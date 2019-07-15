import {CREATE_COLUMN} from '../actions/types';

const initialState = {
};

const column = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COLUMN:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default column;