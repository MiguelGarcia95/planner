import {CREATE_COLUMN, DELETE_COLUMN, DELETE_ALL_BOARD_COLUMNS, GET_COLUMNS, REARRANGE_COLUMNS, GET_COLUMNS_ORDER} from './types';
import axios from 'axios';

export const createColumn = columnData => {
  return async dispatch => {
    try {
      await fetch('/columns', {
        method: 'POST',
        body: JSON.stringify(columnData),
        headers: {'Content-Type': 'application/json'}
      })
      console.log(columnData);
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