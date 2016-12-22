import React, { PropTypes } from 'react';

const cellStyle = {
  border: '1px solid #a2a2a2',
  borderRadius: '2px',
};

const EmptyCell = () => {
  const emptyStyle = Object.assign({}, cellStyle, {
    background: '#7da3c9',
  });

  return (
    <td
      style={emptyStyle}
    />
  );
};

const CountCell = ({ count }) => {
  return (
    <td style={cellStyle}>
      {count}
    </td>
  );
};

CountCell.propTypes = {
  count: PropTypes.number.isRequired,
};

const BombCell = () => {
  const bombStyle = Object.assign({}, cellStyle, {
    background: '#FF6666',
  });

  return (
    <td
      style={bombStyle}
    />
  );
};

const Cell = ({ isBomb, bombCount }) => {
  const cell = isBomb ? BombCell() :
    (bombCount === 0 ? EmptyCell() : CountCell({ count: bombCount}));
  return cell;
};

Cell.propTypes = {
  isBomb: PropTypes.bool.isRequired,
  bombCount: PropTypes.number.isRequired,
};


export default Cell;
