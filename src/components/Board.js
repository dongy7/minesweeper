import React, { PropTypes } from 'react';
import Cell from './Cell';
import { isBomb } from '../reducers/board';

const Row = ({ boardRow, rowID, countBoard, shouldReveal, shouldFlag, onLeftClick, onRightClick }) => {
  return (
    <tr>
      {boardRow.map((cell, id) => {
        return (
          <Cell
            isBomb={isBomb(cell)}
            isRevealed={shouldReveal(id, rowID)}
            isFlagged={shouldFlag(id, rowID)}
            bombCount={countBoard[rowID][id]}
            onLeftClick={() => onLeftClick(id, rowID)}
            onRightClick={() => onRightClick(id, rowID)}
            key={id}
          />
        );
      })}
    </tr>
  );
};

Row.propTypes = {
  boardRow: PropTypes.arrayOf(PropTypes.number).isRequired,
  rowID: PropTypes.number.isRequired,
  countBoard: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
  shouldReveal: PropTypes.func.isRequired,
  shouldFlag: PropTypes.func.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
};

const Board = ({ bombBoard, countBoard, shouldReveal, shouldFlag, onLeftClick, onRightClick }) => {
  return (
    <table>
      <tbody>
        {bombBoard.map((row, id) => {
          return (
            <Row
              boardRow={row}
              rowID={id}
              countBoard={countBoard}
              shouldReveal={shouldReveal}
              shouldFlag={shouldFlag}
              onLeftClick={onLeftClick}
              onRightClick={onRightClick}
              key={id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

Board.propTypes = {
  bombBoard: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
  countBoard: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
  shouldReveal: PropTypes.func.isRequired,
  shouldFlag: PropTypes.func.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
};

export default Board;
