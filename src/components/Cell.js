import React, { PropTypes } from 'react';
import { BombIcon, NumberIcon, FlagIcon } from './Icon';

const cellStyle = {
  border: '1px solid #a2a2a2',
  borderRadius: '2px',
};

const UnRevealedCell = ({ onLeftClick }) => {
  const unrevealedStyle = Object.assign({}, cellStyle, {
    background: '#dddddd',
  });
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
      style={unrevealedStyle}
      onClick={handleClick}
    >
      <div className="content" />
    </td>
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
    <td style={emptyStyle}>
      <div className="content" />
    </td>
  );
};

const CountCell = ({ count }) => {
  return (
    <td style={cellStyle}>
      <div className="content">
        <NumberIcon
          number={count}
        />
      </div>
    </td>
  );
};

CountCell.propTypes = {
  count: PropTypes.number.isRequired,
};

const BombCell = () => {
  return (
    <td style={cellStyle}>
      <div className="content">
        <BombIcon />
      </div>
    </td>
  );
};

const FlaggedCell = () => {
  return (
    <td style={cellStyle}>
      <div className="content">
        <FlagIcon />
      </div>
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
