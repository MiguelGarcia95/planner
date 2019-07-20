// import {CREATE_COLUMN, DELETE_COLUMN, DELETE_ALL_BOARD_COLUMNS, GET_COLUMNS, REARRANGE_COLUMNS, GET_COLUMNS_ORDER} from './types';
import {CREATE_COLUMN} from './types';
import {rearrangeBoardColumns} from './board';

import axios from 'axios';

export const createColumn = columnData => {
  return async dispatch => {
    try {
      const results = await axios.post('/columns', columnData);
      dispatch(rearrangeBoardColumns(results.data));
      dispatch({
        type: CREATE_COLUMN
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteColumn = columnId => {
  return dispatch => {
  }
}

export const deleteAllBoardColumns = boardId => {
  return dispatch => {

  }
}

export const getColumns = boardId => {
  return dispatch => {

  }
}

export const getColumnsOrder = boardId => {
  return dispatch => {

  }
}

export const rearrangeColumns = (columns) => {
  return dispatch => {
  }
}