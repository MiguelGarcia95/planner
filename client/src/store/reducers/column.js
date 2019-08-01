import {CREATE_COLUMN, GET_COLUMNS, UPDATE_COLUMN_TASK, REARRANGE_COLUMN_TASKS, UPDATE_COLUMN} from '../actions/types';

const initialState = {
  columns: [],
  toggled: false
};

const replaceColumn = (columns, newColumn) => {
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
        columns: [...state.columns, action.payload.column],
      }
    case GET_COLUMNS:
      return {
        ...state,
        columns: action.payload.columns,
      }
    case UPDATE_COLUMN:
        return {
          ...state,
          columns: replaceColumn(state.columns, action.payload.updatedColumn),
          toggled: !state.toggled,
        }
    case UPDATE_COLUMN_TASK:
      return {
        ...state,
        columns: replaceColumn(state.columns, action.payload.updatedColumn),
        toggled: !state.toggled,
      }
    case REARRANGE_COLUMN_TASKS:
      return {
        ...state,
        columns: replaceColumn(state.columns, action.payload.rearrangedColumn),
        toggled: !state.toggled,
      }
    default:
      return state;
  }
}

export default column;