import {CREATE_COLUMN, GET_COLUMNS} from '../actions/types';

const initialState = {
  columns: [],
};

const column = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COLUMN:
      return {
        ...state,
        columns: [...state.columns, action.payload.column]
      }
    case GET_COLUMNS:
      return {
        ...state,
        columns: action.payload.columns,
      }
    default:
      return state;
  }
}

export default column;