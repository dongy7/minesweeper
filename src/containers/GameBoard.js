import { connect } from 'react-redux';
import Board from '../components/Board';
import { getBombBoard, getCountBoard } from '../reducers/board';

const mapStateToProps = (state) => ({
  bombBoard: getBombBoard(state),
  countBoard: getCountBoard(state),
});

const GameBoard = connect(
  mapStateToProps,
  null
)(Board);

export default GameBoard;
