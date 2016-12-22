import React, { PropTypes } from 'react';
import Row from './Row';

const Board = ({ bombBoard }) => {
  const rows = bombBoard.map((row, id) => {
    return (
      <Row
        boardRow={row}
        rowID={id}
        key={id}
      />
    );
  });

  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

Board.propTypes = {
  bombBoard: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
};

export default Board;
