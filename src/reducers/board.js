import { combineReducers } from 'redux';
import {
  computeRevealGrid,
  findLocationsToReveal,
  initGameBoard,
  hashLocation,
  GRID,
  toggleLocation,
  isBombLocation,
  isGoalState,
} from '../game';
import { CLICK_CELL, FLAG_CELL } from '../actions';

const gameState = {
  onGoing: 0,
  lost: 1,
  won: 2,
};

const createBoard = (width, height, bombCount) => {
  const gameBoard = initGameBoard(width, height, bombCount);
  const bombGrid = gameBoard.grid;
  const bombLocations = gameBoard.bombPositions;
  const countBoard = gameBoard.countGrid;
  const revealGrid = gameBoard.revealGrid;
  const flagGrid = gameBoard.flagGrid;

  const bombBoard = (state = bombGrid, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const bombPositions = (state = bombLocations, action) => {
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
    bombsLeft: bombCount,
    gameState: gameState.onGoing,
  }, action) => {
    let revealLocations;
    let count;
    let newGameState;
    let newRevealGrid;

    switch (action.type) {
      case CLICK_CELL:
        revealLocations = findLocationsToReveal(
          gameBoard.grid, gameBoard.bombPositions, countBoard,
          action.x, action.y
        );

        newRevealGrid = computeRevealGrid(state.revealGrid, revealLocations);

        if (isBombLocation(
          bombGrid, action.x, action.y
        ) || state.gameState === gameState.lost) {
          newGameState = gameState.lost;
        } else if (isGoalState(newRevealGrid, bombGrid)) {
          newGameState = gameState.won;
        } else {
          newGameState = gameState.onGoing;
        }

        return Object.assign({}, state, {
          revealGrid: newRevealGrid,
          gameState: newGameState,
        });
      case FLAG_CELL:
        if (state.revealGrid[action.y][action.x]) {
          break;
        }

        count = (state.flagGrid[action.y][action.x]) ? (
          state.bombsLeft + 1) : (state.bombsLeft - 1);

        return Object.assign({}, state, {
          flagGrid: toggleLocation(state.flagGrid, action.x, action.y),
          bombsLeft: count,
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
  return state.board.bombPositions[hashLocation(x, y)] || false;
};

export const isBomb = (cell) => {
  return cell === GRID.bomb;
};

export const getBombBoard = (state) =>
  state.board.bombBoard;

export const getCountBoard = (state) =>
  state.board.bombCountBoard;

export const shouldReveal = (state, x, y) =>
  state.board.metadata.revealGrid[y][x];

export const shouldFlag = (state, x, y) =>
  state.board.metadata.flagGrid[y][x];

export const getBombCount = (state, x, y) =>
  state.board.bombCountBoard[y][x];

export const getBombsLeft = (state) =>
  state.board.metadata.bombsLeft;

export const hasWon = (state) => {
  return state.board.metadata.gameState === gameState.won;
};

export const hasLost = (state) => {
  return state.board.metadata.gameState === gameState.lost;
};
