import { combineReducers } from 'redux';
import { initGameBoard, getBombCountBoard, hashLocation } from '../game';

const board = (width, height, bombCount) => {
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

export default board;

export const hasBomb = (state, x, y) => {
  return state.board.bombPositions[hashLocation(x, y)];
};