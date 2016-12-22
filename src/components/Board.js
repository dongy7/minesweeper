import React, { PropTypes } from 'react';
import Cell from './Cell';
import { isBomb } from '../reducers/board';

const Row = ({ boardRow, rowID, countBoard, shouldReveal, onLeftClick }) => {
  return (
    <tr>
      {boardRow.map((cell, id) => {
        return (
          <Cell
            isBomb={isBomb(cell)}
            isRevealed={shouldReveal(id, rowID)}
            bombCount={countBoard[rowID][id]}
            onLeftClick={() => onLeftClick(id, rowID)}
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
  onLeftClick: PropTypes.func.isRequired,
};

const Board = ({ bombBoard, countBoard, shouldReveal, onLeftClick }) => {
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
              onLeftClick={onLeftClick}
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
  onLeftClick: PropTypes.func.isRequired,
};

export default Board;
