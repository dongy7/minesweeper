import { combineReducers } from 'redux';
import { initGameBoard, getBombCountBoard } from '../game';

const board = (width, height) => {
  const gameBoard = initGameBoard(width, height);
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
