import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { reset } from '../actions';
import { getBombsLeft, hasWon, hasLost } from '../reducers/board';

const mapStateToProps = (state) => ({
  bombsLeft: getBombsLeft(state),
  hasWon: hasWon(state),
  hasLost: hasLost(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(reset());
  },
});

const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

export default Navigation;
