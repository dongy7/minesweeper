import { combineReducers } from 'redux';
import {
  computeRevealGrid,
  findLocationsToReveal,
  initGameBoard,
  hashLocation,
  GRID,
  toggleLocation,
} from '../game';
import { CLICK_CELL, FLAG_CELL } from '../actions';

const createBoard = (width, height, bombCount) => {
  const gameBoard = initGameBoard(width, height, bombCount);
  const countBoard = gameBoard.countGrid;
  const revealGrid = gameBoard.revealGrid;
  const flagGrid = gameBoard.flagGrid;

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

  const metadata = (state = {
    revealGrid,
    flagGrid,
  }, action) => {
    let revealLocations;
    switch (action.type) {
      case CLICK_CELL:
        revealLocations = findLocationsToReveal(
          gameBoard.grid, gameBoard.bombPositions, countBoard,
          action.x, action.y
        );
        return Object.assign({}, state, {
          revealGrid: computeRevealGrid(state.revealGrid, revealLocations),
        });
      case FLAG_CELL:
        if (state.revealGrid[action.y][action.x]) {
          break;
        }

        return Object.assign({}, state, {
          flagGrid: toggleLocation(state.flagGrid, action.x, action.y),
        });
      default:
        return state;
    }
  };

  return combineReducers({
    bombBoard,
    bombPositions,
    bombCountBoard,
    metadata,
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
  state.board.metadata.revealGrid[y][x];

export const shouldFlag = (state) => (x, y) =>
  state.board.metadata.flagGrid[y][x];
