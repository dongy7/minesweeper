import { connect } from 'react-redux';
import Board from '../components/Board';
import { getBombBoard, getCountBoard, shouldReveal } from '../reducers/board';
import { clickCell } from '../actions';

const mapStateToProps = (state) => ({
  bombBoard: getBombBoard(state),
  countBoard: getCountBoard(state),
  shouldReveal: shouldReveal(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLeftClick(x, y) {
    dispatch(clickCell(x, y));
  },
});

const GameBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default GameBoard;
