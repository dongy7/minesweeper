import React, { PropTypes } from 'react';

const EmptyCell = () => {
  const emptyStyle = {
    background: '#7da3c9',
  };

  return (
    <td
      style={emptyStyle}
    />
  );
};

const CountCell = ({ count }) => {
  return (
    <td>
      {count}
    </td>
  );
};

CountCell.propTypes = {
  count: PropTypes.number.isRequired,
};

const BombCell = () => {
  const bombStyle = {
    background: '#FF6666',
  };

  return (
    <td
      style={bombStyle}
    />
  );
};

const Cell = ({ isBomb, bombCount }) => {
  const cell = isBomb ? BombCell() : (bombCount === 0 ? EmptyCell() : CountCell(bombCount));
  return cell;
};

Cell.propTypes = {
  isBomb: PropTypes.bool.isRequired,
  bombCount: PropTypes.number.isRequired,
};


export default Cell;
