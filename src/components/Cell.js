import React, { PropTypes } from 'react';

const cellStyle = {
  border: '1px solid #a2a2a2',
  borderRadius: '2px',
};

const UnRevealedCell = ({ onLeftClick }) => {
  const handleClick = (e) => {
    console.log(e.nativeEvent.which);
    switch (e.nativeEvent.which) {
      case 1:
        onLeftClick();
        break;
      default:
        break;
    }
  };

  return (
    <td
      style={cellStyle}
      onClick={handleClick}
    />
  );
};

UnRevealedCell.propTypes = {
  onLeftClick: PropTypes.func.isRequired,
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

const Cell = ({ isBomb, isRevealed, bombCount, onLeftClick }) => {
  const cell = isRevealed ? (
    isBomb ? BombCell() : (bombCount === 0 ? EmptyCell() : CountCell({ count: bombCount}))
  ) : UnRevealedCell({ onLeftClick });
  return cell;
};

Cell.propTypes = {
  isBomb: PropTypes.bool.isRequired,
  isRevealed: PropTypes.bool.isRequired,
  bombCount: PropTypes.number.isRequired,
  onLeftClick: PropTypes.func.isRequired,
};

export default Cell;
