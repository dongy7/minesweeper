import { combineReducers } from 'redux';
import { initGameBoard, getBombCountBoard, hashLocation, GRID } from '../game';

const createBoard = (width, height, bombCount) => {
  const gameBoard = initGameBoard(width, height, bombCount);
  const countBoard = getBombCountBoard(gameBoard.grid);

  const bombBoard = (state = gameBoard.grid, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const bombPositions = (state = gameBoard.bombPositions, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const bombCountBoard = (state = countBoard, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  return combineReducers({
    bombBoard,
    bombPositions,
    bombCountBoard,
  });
};

export default createBoard;

export const hasBomb = (state, x, y) => {
  return state.board.bombPositions[hashLocation(x, y)];
};

export const isBomb = (cell) => {
  return cell === GRID.bomb;
};

export const getBombBoard = (state) =>
  state.board.bombBoard;

export const getCountBoard = (state) =>
  state.board.bombCountBoard;
