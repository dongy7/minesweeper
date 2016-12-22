import React, { PropTypes } from 'react';
import GameCell from '../containers/GameCell';

const Row = ({ boardRow, rowID }) => {
  return (
    <tr>
      {boardRow.map((cell, id) => {
        return (
          <GameCell
            rowID={rowID}
            colID={id}
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
};

export default Row;
