import {CREATE_BOARD} from './types';

export const createBoard = boardData => {
  return dispatch => {
    dispatch({
      type: CREATE_BOARD,
      payload: {
        board: boardData
      }
    })
  }
}
