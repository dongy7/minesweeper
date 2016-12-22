import { connect } from 'react-redux';
import Board from '../components/Board';
import { getBombBoard, getCountBoard, shouldReveal, shouldFlag } from '../reducers/board';
import { clickCell, flagCell } from '../actions';

const mapStateToProps = (state) => ({
  bombBoard: getBombBoard(state),
  countBoard: getCountBoard(state),
  shouldReveal: shouldReveal(state),
  shouldFlag: shouldFlag(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLeftClick(x, y) {
    dispatch(clickCell(x, y));
  },
  onRightClick(x, y) {
    dispatch(flagCell(x, y));
  },
});

const GameBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default GameBoard;
