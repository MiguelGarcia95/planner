import {CREATE_COLUMN, GET_COLUMNS, UPDATE_COLUMN_TASK, REARRANGE_COLUMN_TASKS} from '../actions/types';

const initialState = {
  columns: [],
};

const replaceColumn = (columns, newColumn) => {
  console.log(columns);
  console.log(newColumn);
  const index = columns.findIndex(column => column._id === newColumn._id);
  let sortedColumns = columns;
  sortedColumns[index] = newColumn;
  return sortedColumns;
}

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
      const index = state.columns.findIndex(column => column._id === action.payload.updatedColumn._id);
      let columns = state.columns;
      columns[index] = action.payload.updatedColumn;
      return {
        ...state,
        columns: columns,
      }
    case REARRANGE_COLUMN_TASKS:
      return {
        ...state,
        columns: replaceColumn(state.columns, action.payload.rearrangedColumn)
      }
    default:
      return state;
  }
}

export default column;