import React, { PropTypes } from 'react';
import Cell from './Cell';
import { isBomb } from '../reducers/board';

const Row = ({ boardRow, rowID, countBoard, shouldReveal }) => {
  return (
    <tr>
      {boardRow.map((cell, id) => {
        return (
          <Cell
            isBomb={isBomb(cell)}
            isRevealed={shouldReveal(id, rowID)}
            bombCount={countBoard[rowID][id]}
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
};

const Board = ({ bombBoard, countBoard, shouldReveal }) => {
  const tableStyle = {
    width: '400px',
    height: '400px',
  };

  return (
    <table style={tableStyle}>
      <tbody>
        {bombBoard.map((row, id) => {
          return (
            <Row
              boardRow={row}
              rowID={id}
              countBoard={countBoard}
              shouldReveal={shouldReveal}
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
};

export default Board;
