import { combineReducers } from 'redux';
import createBoard from './board';
import { RESET } from '../actions';

const gameReducer = combineReducers({
  board: createBoard(16, 16, 40),
});

const rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = undefined;
  }

  return gameReducer(state, action);
};

export default rootReducer;
