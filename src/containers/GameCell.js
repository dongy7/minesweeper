import { connect } from 'react-redux';
import { hasBomb, shouldReveal, shouldFlag, getBombCount } from '../reducers/board';
import { clickCell, flagCell } from '../actions';
import Cell from '../components/Cell';

const mapStateToProps = (state, ownProps) => {
  const x = ownProps.colID;
  const y = ownProps.rowID;
  return {
    isBomb: hasBomb(state, x, y),
    isRevealed: shouldReveal(state, x, y),
    isFlagged: shouldFlag(state, x, y),
    bombCount: getBombCount(state, x, y),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const x = ownProps.colID;
  const y = ownProps.rowID;
  return {
    onLeftClick: () => {
      dispatch(clickCell(x, y));
    },
    onRightClick: () => {
      dispatch(flagCell(x, y));
    },
  };
};

const GameCell = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);

export default GameCell;
