import React, { PropTypes } from 'react';
import Cell from './Cell';
import { isBomb } from '../reducers/board';

const Row = ({ boardRow, rowID, countBoard }) => {
  return (
    <tr>
      {boardRow.map((cell, id) => {
        return (
          <Cell
            isBomb={isBomb(cell)}
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
};

const Board = ({ bombBoard, countBoard }) => {
  return (
    <table>
      <tbody>
        {bombBoard.map((row, id) => {
          return (
            <Row
              boardRow={row}
              rowID={id}
              countBoard={countBoard}
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
};

export default Board;
