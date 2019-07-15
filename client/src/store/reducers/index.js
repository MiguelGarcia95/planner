import {combineReducers} from 'redux';
import boardReducer from './board';
import taskReducer from './task';
import columnReducer from './column';

const rootReducer = combineReducers({
  board: boardReducer,
  task: taskReducer,
  column: columnReducer,
})

export default rootReducer;
