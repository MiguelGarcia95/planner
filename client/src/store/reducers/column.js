import {CREATE_COLUMN, GET_COLUMNS, UPDATE_COLUMN_TASK} from '../actions/types';

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
    case UPDATE_COLUMN_TASK:
      const newColumns = state.columns.map(column => {
        return action.payload.updatedColumn.find(c => c._id === column._id) || column
      });
      console.elog(newColumns);
      return {
        ...state,

      }
    default:
      return state;
  }
}

export default column;