import {combineReducers} from 'redux';
import boardReducer from './board';
import taskReducer from './task';
import columnReducer from './column';
import uiReducer from './ui';
import authReducer from './auth';

const rootReducer = combineReducers({
  board: boardReducer,
  task: taskReducer,
  column: columnReducer,
  auth: authReducer,
  ui: uiReducer
})

export default rootReducer;
