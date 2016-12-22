import { combineReducers } from 'redux';
import {
  computeRevealGrid,
  findLocationsToReveal,
  initGameBoard,
  initRevealGrid,
  getBombCountBoard,
  hashLocation,
  GRID,
} from '../game';
import { CLICK_CELL } from '../actions';

const createBoard = (width, height, bombCount) => {
  const gameBoard = initGameBoard(width, height, bombCount);
  const countBoard = getBombCountBoard(gameBoard.grid);
  const revealGrid = initRevealGrid(width, height);

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

  const revealBoard = (state = revealGrid, action) => {
    let revealLocations;
    switch (action.type) {
      case CLICK_CELL:
        revealLocations = findLocationsToReveal(
          gameBoard.grid, gameBoard.bombPositions, countBoard,
          action.x, action.y
        );
        return computeRevealGrid(state, revealLocations);
      default:
        return state;
    }
  };

  return combineReducers({
    bombBoard,
    bombPositions,
    bombCountBoard,
    revealBoard,
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

export const shouldReveal = (state) => (x, y) =>
  state.board.revealBoard[y][x];
