import { connect } from 'react-redux';
import Board from '../components/Board';
import { getBombBoard, getCountBoard, shouldReveal } from '../reducers/board';

const mapStateToProps = (state) => ({
  bombBoard: getBombBoard(state),
  countBoard: getCountBoard(state),
  shouldReveal: shouldReveal(state),
});

const GameBoard = connect(
  mapStateToProps,
  null
)(Board);

export default GameBoard;
