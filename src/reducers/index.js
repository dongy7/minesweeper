import { combineReducers } from 'redux';
import createBoard from './board';
import { RESET } from '../actions';

const getGameReducer = () => {
  return combineReducers({
    board: createBoard(8, 8, 10),
  })
};

let gameReducer = getGameReducer();

const rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = undefined;
    gameReducer = getGameReducer();
  }

  return gameReducer(state, action);
};

export default rootReducer;
