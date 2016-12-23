import React, { PropTypes } from 'react';
import { BombIcon, NumberIcon, FlagIcon } from './Icon';

const cellStyle = {
  border: '1px solid #a2a2a2',
  borderRadius: '2px',
};

const UnRevealedCell = ({ onLeftClick, onRightClick }) => {
  const unrevealedStyle = Object.assign({}, cellStyle, {
    background: '#dddddd',
  });

  const handleClick = (e) => {
    switch (e.nativeEvent.which) {
      case 1:
        onLeftClick();
        break;
      default:
        break;
    }
  };

  const handleRightClick  = (e) => {
    e.preventDefault();
    onRightClick();
  };

  return (
    <td
      style={unrevealedStyle}
      onClick={handleClick}
      onContextMenu={handleRightClick}
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
    background: '#424242',
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

const FlaggedCell = ({ onRightClick }) => {
  const handleRightClick  = (e) => {
    e.preventDefault();
    onRightClick();
  };

  return (
    <td
      style={cellStyle}
      onContextMenu={handleRightClick}
    >
      <div className="content">
        <FlagIcon />
      </div>
    </td>
  );
};

FlaggedCell.propTypes = {
  onRightClick: PropTypes.func.isRequired,
};

const Cell = ({
  isBomb, isRevealed, isFlagged,
  bombCount,
  onLeftClick, onRightClick }) => {
  const cell = isFlagged ? FlaggedCell({ onRightClick }) : (
    isRevealed ? (isBomb ? BombCell() : (
      bombCount === 0 ? EmptyCell() : CountCell({ count: bombCount}))
    ) : UnRevealedCell({ onLeftClick, onRightClick }));
  return cell;
};

Cell.propTypes = {
  isBomb: PropTypes.bool.isRequired,
  isRevealed: PropTypes.bool.isRequired,
  isFlagged: PropTypes.bool.isRequired,
  bombCount: PropTypes.number.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
};

export default Cell;
