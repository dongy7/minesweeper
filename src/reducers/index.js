import { combineReducers } from 'redux';
import createBoard from './board';

const rootReducer = combineReducers({
  board: createBoard(16, 16, 40),
});

export default rootReducer;
