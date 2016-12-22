import React, { PropTypes } from 'react';
import { BombIcon, NumberIcon } from './Icon';

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
      <NumberIcon
        number={count}
      />
    </td>
  );
};

CountCell.propTypes = {
  count: PropTypes.number.isRequired,
};

const BombCell = () => {
  return (
    <td style={cellStyle}>
      <BombIcon />
    </td>
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
